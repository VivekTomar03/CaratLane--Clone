import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/auth/auth.action";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput = (e) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };
  const checkLoginData = () => {
    dispatch(login(inputLogin)).then((res) => {
      if (res.msg === "Login Successfull") {
        toast({
          title: res.msg,
          description: "Hurray",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/");
      } else if (res.msg === "Welcome Admin !") {
        toast({
          title: res.msg,
          description: "Welcome to admin",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/admin");
      } else {
        toast({
          title: res.msg,
          description: "Ooppss...!",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
      // navigate("/")
    });
  };
  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  value={inputLogin.email}
                  id="email"
                  onChange={handleInput}
                  required
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={inputLogin.password}
                  id="password"
                  onChange={handleInput}
                  type="password"
                />
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "column" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Stack>
                    <Checkbox>Remember me</Checkbox>
                  </Stack>

                  <Stack p={5} align={"center"}>
                    <Text align={"center"}>
                      Don't have an account?
                      <NavLink to="/signup">
                        <Link color={"blue.400"}>Create Account</Link>
                      </NavLink>
                    </Text>
                  </Stack>
                </Stack>
                <Button
                  bgGradient="linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))"
                  color={"white"}
                  onClick={checkLoginData}
                  _hover={{
                    bgGradient:
                      "linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
