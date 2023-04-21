import React, { useContext } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/ContextAuth';
import { Text } from '@chakra-ui/react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user) 
    const location = useLocation()

    if (loading) {
        return <Text>Wait a bit..</Text>
    }

    else if (user) {
        return children;
    }

    // else {
        return <>
            <Navigate to='/login' replace state={{ from: location }} ></Navigate>
        </>
    // }

}


export default PrivateRoute;