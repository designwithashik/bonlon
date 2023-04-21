import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {FaBed, FaDollarSign, FaShoePrints} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Room = ({ room }) => {
    
    const { title, beds, photo, price, persons, description} = room;
    return (
        <Card p={5} gap={5}>
            <Heading>{title}</Heading>
            <Image src={photo}></Image>
            <Text color='gray.600'>{description.slice(0, 30)}...</Text>
            <Flex justifyContent='space-evenly'>
            <Flex alignItems='center'><FaBed /><Text color='gray.700'>: {beds}</Text></Flex>
            <Flex alignItems='center'><FaShoePrints /><Text color='gray.700'>: {persons}</Text></Flex>
            <Flex alignItems='center'><FaDollarSign /><Text color='gray.700'>: {price}</Text></Flex>
                
                <Button variant='solid'><Link to='/book'>Book</Link></Button>
            </Flex>
        </Card>
    );
};

export default Room;