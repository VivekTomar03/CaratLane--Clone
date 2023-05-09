import { Center, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const [count , setcount] = useState(3)
    const navigate = useNavigate()
    useEffect(() => {
    let id =   setTimeout(() => {
         setcount((prev) => prev-1)
       }, 1000);

        if(count===0){
          clearInterval(id)
          console.log(count);
           navigate("/")
        }
    },[count])
  return (
    <Center m={10} display={"flex"} flexDirection={"column"}>
      <Image alt="success"
       src='https://cdn.dribbble.com/users/1735807/screenshots/4290582/media/580d17098258a9455826077142caa395.gif'/>
       <Text fontSize="25px" color="green">Order Successful !</Text>
       <Text>Thank you so much for your order.</Text>
        <Heading>You Will Redirect to Home In {count}</Heading>
    </Center>
  );
}

export default SuccessPage;
