import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { FaEye, FaFacebook, FaGoogle, FaLock, FaLockOpen, FaUnlock } from 'react-icons/fa';
import { AuthContext } from '../Auth/ContextAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const { googleLogIn, emailLogin, setUser, setLoading } = useContext(AuthContext)
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const go = location?.state?.from?.pathname || '/'

//     useEffect(() => {
//         if (user) {
//             navigate(go);
//     }
// },[user])
    
    // console.log(location)

    // console.log(go)
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                // setSuccess('Logged In');
                // console.log(navigate)
                navigate(go, {replace: true})
            })
        .catch(error => setError(error.message))
    }

    const handleLogin = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Invalid password!!')
            return;
        }
        console.log(email, password)
        emailLogin(email, password)
            .then(result => navigate(go, { replace: true }))
            .catch(error => setError(error.message))
        

    }
    const handleFacebookLogin = () => {
        console.log('clicked on facebook')
    }
    return (
        <Container >
            <Heading my='20px' textAlign='center'>Login Here</Heading>
            <form onSubmit={handleLogin}>
                <Input placeholder='Email' type="email" name="email" id="email" my='16px'/>
                
                <Box position='relative'>
                <Input placeholder='Password' type={showPass ? 'text' : 'password'} name="password" id="password" />
                <Text position='absolute' right='15px' top='13px' onClick={()=>setShowPass(!showPass)}>{showPass? <FaUnlock/>: <FaLock/>}</Text>
                </Box>
                <br />
                <Flex justifyContent='center'><Button px='100px' colorScheme='blue' type='submit'>Log In </Button></Flex>
                <Text mt='16px'>Don't have an Account? <Text color='blue.500' as='span'><Link to='/register'>Register</Link></Text></Text>
            </form>

            <Flex gap={5} mt='30px'>
            <Button onClick={handleGoogleLogin} colorScheme='red' variant='outline'><FaGoogle color='green' /> <Text ml={2}>Login With Google</Text></Button>
            <Button onClick={handleFacebookLogin} colorScheme='blue' variant='outline'><FaFacebook color='blue' /> <Text ml={2}>Login With Facebook</Text></Button>
            </Flex>
            <Text color='red.500'>{error}</Text>
            <Text color='green.500'>{success}</Text>
        </Container>
    );
};

export default Login;