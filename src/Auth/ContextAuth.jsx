import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext({});
const auth = getAuth(app)
const ContextAuth = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true);


    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const [user, setUser] = useState('')
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
           return unsubscribe()
        }
},[])
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        rooms,
        googleLogIn,
        emailLogin,
        setUser,
        emailSignUp,
        setLoading,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;