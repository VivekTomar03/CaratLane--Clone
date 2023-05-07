import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  const [ResData, setResData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleInput = () => {
    console.log("clickek");
  };
  const sendUserData = () => {
    console.log("userSend");
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
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    value={ResData.firstName}
                    required
                    type="text"
                    id="FirstName"
                    name="firstName"
                    onChange={handleInput}
                  />
                </FormControl>
              </Box>
              <Box>
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
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={ResData.Email}
                id="Email"
                required
                name="Email"
                onChange={handleInput}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  id="Password"
                  value={ResData.Password}
                  name="Password"
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
                    <Link style={{color:"blue"}}> Sign In</Link>
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
