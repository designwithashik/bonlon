import { Card, Flex, Grid, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/ContextAuth';
import Room from './Room';

const Home = () => {
    const { user, rooms } = useContext(AuthContext);
    console.log(rooms)
    return (
        <div>
            <Heading textAlign='center'>Welcome to Bon lon</Heading>
            <Grid gridGap={5} gridTemplateColumns='repeat(2, 1fr)' >
                {rooms.map((room, index) => {
                return <Room key={index} room ={room}></Room>
            })}
            </Grid >
        </div>
    );
};

export default Home;