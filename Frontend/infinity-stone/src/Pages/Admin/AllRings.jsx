import { Box, Button, Image, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
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
import { useEffect } from "react";
const initstate = {
  imageurl: "",
  image: "",
  price: 0,
  originalprice: 0,
  title: "",
  size: 0,
};
const AllRings = ({ setsuspendacc, suspendacc }) => {
  const [singeluser, setsingeluser] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setformdata] = useState(initstate);
  const [data, setdata] = useState([]);
  const [showform, setshowform] = useState(false);
  const [page, setpage] = useState(1);
  const getRingsdata = () => {
    axios
      .get(`https://red-worried-dove.cyclic.app/rings?limit=10&page=${page}`)
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handlechange = (e) => {
    const { name, value, type } = e.target;
    const val = type == "number" ? Number(value) : value;
    setsingeluser({ ...singeluser, [name]: val });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(singeluser);
    axios(
      `https://red-worried-dove.cyclic.app/rings/update/${singeluser._id}`,
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
        getRingsdata();
        onClose();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id, el) => [
    axios
      .delete(`https://red-worried-dove.cyclic.app/rings/delete/${id}`)
      .then((res) => {
        console.log(res);
        getRingsdata();
        setsuspendacc([...suspendacc, el]);
      })
      .catch((err) => console.log(err)),
  ];

  const handlesubmit1 = (e) => {
    e.preventDefault();
    axios
      .post("https://red-worried-dove.cyclic.app/rings/add", formdata)
      .then((res) => {
        console.log(res);
        getRingsdata();
        setformdata(initstate);
        setshowform(!showform);
      })
      .catch((err) => console.log(err));
  };
  const handlechange1 = (e) => {
    const { type, name, value } = e.target;
    let val = type == "number" ? Number(value) : value;
    setformdata({ ...formdata, [name]: val });
  };

  useEffect(() => {
    getRingsdata();
  }, []);
  return (
    <Box>
      <Button
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"teal"}
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
        marginLeft={"80%"}
        onClick={() => setshowform(!showform)}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        ADD
      </Button>
      {showform ? (
        <Box p={10} w={"70%"} m={"auto"} bg={"#088395"}>
          <form onSubmit={handlesubmit1}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formdata.title}
                onChange={handlechange1}
              />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={formdata.price}
                onChange={handlechange1}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Original Price</FormLabel>
              <Input
                type="number"
                name="originalprice"
                value={formdata.originalprice}
                onChange={handlechange1}
              />
            </FormControl>

            <FormControl id="Image">
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="imageurl"
                value={formdata.imageurl}
                onChange={handlechange1}
              />
            </FormControl>
            <FormControl id="Image">
              <FormLabel>Image </FormLabel>
              <Input
                type="text"
                name="image"
                value={formdata.image}
                onChange={handlechange1}
              />
            </FormControl>
            <FormControl id="size">
              <FormLabel>Size</FormLabel>
              <Input
                type="number"
                name="size"
                value={formdata.size}
                onChange={handlechange1}
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
                Add Rings
              </Button>
            </Stack>
          </form>
        </Box>
      ) : (
        <TableContainer>
          <Table colorScheme={"#205E61"} variant="simple">
            <TableCaption>All Rings Products Data</TableCaption>
            <Thead>
              <Tr flexDirection={"column"}>
                <Th>S.No</Th>
                <Th>Title</Th>
                <Th>Price</Th>
                <Th>Discount Price</Th>
                <Th>Image</Th>
                <Th>Size</Th>
                <Th>Edit User</Th>
                <Th>Delete User</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.reverse().map((el, i) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{i + 1}</Td>
                      <Td>{el.title}</Td>
                      <Td>{el.price}</Td>
                      <Td>{el.originalprice}</Td>
                      <Td w={"8%"}>
                        <Image
                          w={"fit-content"}
                          src={el.imageurl}
                          alt={el.id}
                        />
                      </Td>
                      <Td>{el.size}</Td>
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
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
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
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
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
      )}
      <Box display={showform ? "none" : "block"}>
        <Button
          bg="red.500"
          py={2}
          px={4}
          ml={3}
          rounded="md"
          fontWeight="semibold"
          color="white"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
          isDisabled={page == 1}
          onClick={() => setpage(page - 1)}
        >
          Previos
        </Button>
        <Button color={"black"} fontWeight={"bold"} isDisabled={true}>
          {page}
        </Button>
        <Button
          bg="red.500"
          py={2}
          px={4}
          ml={3}
          rounded="md"
          fontWeight="semibold"
          color="white"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
          onClick={() => setpage(page + 1)}
        >
          Next
        </Button>
      </Box>
      <Box className="usereditdata Modal">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handlesubmit}>
                <FormControl id="title">
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={singeluser.title}
                    onChange={handlechange}
                  />
                </FormControl>
                <FormControl id="price">
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    name="price"
                    value={singeluser.price}
                    onChange={handlechange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Original Price</FormLabel>
                  <Input
                    type="number"
                    name="originalprice"
                    value={singeluser.originalprice}
                    onChange={handlechange}
                  />
                </FormControl>

                <FormControl id="Image">
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="text"
                    name="imageurl"
                    value={singeluser.imageurl}
                    onChange={handlechange}
                  />
                </FormControl>
                <FormControl id="size">
                  <FormLabel>Size</FormLabel>
                  <Input
                    type="number"
                    name="size"
                    value={singeluser.size}
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

export default AllRings;
