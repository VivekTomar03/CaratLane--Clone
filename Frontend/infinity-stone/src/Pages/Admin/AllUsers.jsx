import { Box, Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AllUsers = ({ setsuspendacc, suspendacc }) => {
  const [data, setdata] = useState([]);
  const [singeluser, setsingeluser] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUsers = () => {
    axios
      .get("https://red-worried-dove.cyclic.app/users")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setsingeluser({ ...singeluser, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios(
      `https://red-worried-dove.cyclic.app/users/update/${singeluser._id}`,
      {
        method: "patch",
        data: singeluser,
        headers: {
          "Content-Type": "application/json",
          // token will come here
        },
      }
    )
      .then((res) => {
        console.log(res);
        getUsers();
        onClose();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id, el) => [
    axios
      .delete(`https://red-worried-dove.cyclic.app/users/delete/${id}`)
      .then((res) => {
        console.log(res);
        getUsers();
        setsuspendacc([...suspendacc, el]);
      })
      .catch((err) => console.log(err)),
  ];

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box>
      <TableContainer>
        <Table colorScheme={"#205E61"} variant="simple">
          <TableCaption>All Register User Data</TableCaption>
          <Thead>
            <Tr flexDirection={"column"}>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
              <Th>Gender</Th>
              <Th>Edit User</Th>
              <Th>Delete User</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.reverse().map((el, i) => {
                return (
                  <Tr key={el.id}>
                    <Td>{i + 1}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{"12345"}</Td>
                    <Td>{el.gender}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          setsingeluser(el);
                          onOpen();
                        }}
                        px={4}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        px={4}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"red.600"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "red.200",
                        }}
                        _focus={{
                          bg: "red.200",
                        }}
                        onClick={() => handleDelete(el._id, el)}
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>

      <Box className="usereditdata Modal">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handlesubmit}>
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={singeluser.name}
                    onChange={handlechange}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={singeluser.email}
                    onChange={handlechange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <select
                    width="100%"
                    name="gender"
                    value={singeluser.gender}
                    onChange={handlechange}
                  >
                    <option value={""}>Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="text"
                    name="password"
                    value={singeluser.password}
                    onChange={handlechange}
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Update
                  </Button>
                </Stack>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default AllUsers;
