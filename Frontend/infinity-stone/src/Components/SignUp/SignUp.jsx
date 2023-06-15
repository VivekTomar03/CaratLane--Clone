import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from '@chakra-ui/react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ResData, setResData] = useState({
    name: "",
    email: "",
    gender:"",
    password: "",
  });
  const toast = useToast()
  const navigate = useNavigate()
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setResData({ ...ResData, [name]: value });
  };
  const sendUserData = async () => {
    // console.log(ResData)


    if(ResData.name !== "" && ResData.email !== "" && ResData.gender !== "" && ResData.password !== ""){
     let res =  await fetch(`https://cartlane.onrender.com/users/register`,{
        method: "POST",
        body: JSON.stringify(ResData),
        headers:{
          "content-type": "application/json"
        }
      })
      let data = await res.json()
      console.log(data)
      if(data.msg === "Registered Successfully"){
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/login")
      }else if(data.msg === "User already exist"){
        // alert("user already exists !!! Please login to continue")
        // setResData("")
        toast({
          title: data.msg,
          description: "user already exists !!! Please login to continue",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    }else{
       toast({
        title: "Oops !!",
        description: "fill all details",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack id="form" spacing={4}>
            <HStack>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={ResData.name}
                    required
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInput}
                  />
                </FormControl>
              </Box>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={ResData.lastName}
                    required
                    id="LastName"
                    name="lastName"
                    onChange={handleInput}
                  />
                </FormControl>
              </Box> */}
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={ResData.email}
                id="email"
                required
                name="email"
                onChange={handleInput}
              />
            </FormControl>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select onChange={handleInput} name="gender" >
                <option >Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  value={ResData.password}
                  name="password"
                  required
                  onChange={handleInput}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Stack p={2} align={"center"}>
                <Text align={"center"}>
                  Already have an account?
                  <NavLink to="/login">
                    <Link style={{ color: "blue" }}> Sign In</Link>
                  </NavLink>
                </Text>
              </Stack>
              <Button
                onClick={sendUserData}
                loadingText="Submitting"
                size="lg"
                bgGradient="linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))"
                color={"white"}
                _hover={{
                  bgGradient:
                    "linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
