import React from "react";
import logo from "../../ImageData/logo.PNG";
import {
  Text,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  Avatar,
  SimpleGrid,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineGold, AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { BiHomeCircle } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoutUser=()=>{}
  const Name="Ritik"
  return (
    <div>
      <Box
        boxShadow={"lg"}
        bg={useColorModeValue("#1A365D", "#1A365D")}
        h={"20px"}
        position="fixed"
      ></Box>
      <Box w={"100%"} position="fixed" top={0} zIndex={"10"}>
        <Flex
          boxShadow="lg"
          p="2"
          alignItems={"canter"}
          gap={"10px"}
          bg={useColorModeValue("#F6F4ff", "#F6F4ff")}
          justifyContent="space-around"
        >
          <IconButton
            bg={"#F6F4ff"}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            h="60px"
          />
          <HStack alignItems={"center"} display="flex" w="100%" h="60px">
            <HStack
              as={"nav"}
              display={{ base: "none", sm: "flex", md: "flex" }}
              cursor="pointer"
              w="100%"
              h="50px"
              justifyContent="space-around"
              alignItems={"center"}
            >
              <Link to="/">
                <Box>
                  <Image
                    w={{ base: "80px", md: "150px" }}
                    src={logo}
                    alt="log"
                  />
                </Box>
              </Link>
              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<AiOutlineHome />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ sm: "8px", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  FREE TRY AT HOME
                </Text>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<IoStorefrontOutline />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  FIND STORE
                </Text>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                  icon={<BsHandbag />}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", sm: "none", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  PLAN OF PURCHASE
                </Text>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "10px", sm: "none", md: "25px" }}
                  bg={"#F6F4ff"}
                  icon={<AiOutlineGold />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", sm: "none", md: "11px" }}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  BUY DIGITAL GOLD
                </Text>
              </Box>

              <Box className="input-box">
                <FormControl>
                  <InputGroup>
                    <Input
                      _focusVisible={{ border: "1px solid purple" }}
                      border={"1px solid purple"}
                      placeholder="search"
                      _placeholder={{ color: "black" }}
                      bg={"white"}
                      rounded="md"
                      w={{ md: "190px" }}
                      fontSize={"11px"}
                      lineHeight={"18px"}
                      color={"black"}
                    />
                    <InputRightElement width={{ md: "2rem" }}>
                      <IconButton
                        bgGradient="linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))"
                        aria-label="Search database"
                        color={"white"}
                        // icon={<SearchIcon />}
                        h={"2.4rem"}
                        w={"50px"}
                        roundedLeft={"sm"}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<MdLocationPin />}
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "5px", md: "11px" }}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  PIN CODE
                </Text>
              </Box>

              <Avatar
                name="indian-flag"
                w={{ sm: "25px", md: "40px" }}
                size={"sm"}
                src="https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1674037779~exp=1674038379~hmac=37daab84e0a0fe59d3e5c96a6890e019c413fcf3bc6d1265bb10ebe4b461afe4"
              />

              <Popover>
              <PopoverTrigger>
                  <IconButton
                    fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                    bg={"#F6F4ff"}
                    icon={<FaUser />}
                    _hover={{ color: "#231535" }}
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader
                      fontFamily={"sans-serif"}
                      fontSize={"17px"}
                      textAlign="center"
                    >
                      Your Account
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody
                      fontFamily={"sans-serif"}
                      fontSize={"13px"}
                      textAlign="center"
                    >
                      Access acount & manage your orders
                    </PopoverBody>
                    <Button bgGradient="linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))" _hover={{bgGradient:"linear(to-l, rgb(222, 87, 229), rgb(136, 99, 251))"}} onClick={logoutUser}>Logout</Button><PopoverBody
                      border="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-around"
                      pb={4}
                    >
                      <Link to="/signup">
                      {" "}
                      <Button bg="#DE57E5">Signup</Button>
                    </Link>
                    <Link to="/login">
                      <Button borderColor="#DE57E5" variant="outline">
                        Login
                      </Button>
                    </Link>
                      
                    </PopoverBody>
                    
                  </PopoverContent>
                </Portal>
              </Popover>

              <IconButton
                fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                icon={<AiFillHeart />}
                _hover={{ color: "#231535" }}
              />
              <Link to="/cart">
                <IconButton
                  fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                  bg={"#F6F4ff"}
                  icon={<MdShoppingBasket />}
                  _hover={{ color: "#231535" }}
                />
              </Link>
            </HStack>
          </HStack>
        </Flex>
        
      </Box>
    </div>
  );
};

export default Navbar;
