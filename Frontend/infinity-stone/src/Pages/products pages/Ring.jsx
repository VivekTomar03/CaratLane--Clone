import React from "react";
import { Image, Box, Button, Text, Center } from "@chakra-ui/react";
import { Flex, Spacer, Select, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import ProductsCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { getProductsornaments } from "../../Redux/ProductReducer/action";

const Ring = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.productsReducer);
  let [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get("sort");
  const [sort, setSort] = useState(initialSort || "");
  const location = useLocation();
  const [page, setPage] = useState(1);

  let obj = {
    params: {
      price: searchParams.getAll("price"),
      size: searchParams.getAll("size"),
      type: searchParams.get("sort") && "price",
      sort: searchParams.get("sort"),
      page: page,
      limit: 9,
    },
  };

  useEffect(() => {
    dispatch(getProductsornaments(obj));
  }, [location.search, page, sort]);

  const handelCh = (e) => {
    let obj1 = {
      sort,
    };
    setSearchParams(obj1);
    setSort(e.target.value);
  };

  return (
    <div>
      {/* <Box boxSize='sm'> */}
      <Image
        src="https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg"
        alt="Dan Abramov"
        width={["100%"]}
      />

      <Box boxSize="sm" bg="pink" h={["110px"]} w={"100%"}>
        <Box w={"95%"} margin={"auto"}>
          <Flex>
            <Box
              w={["30px", "40px", "50px", "70px"]}
              h="10"
              fontSize={["7px", "9px", "11px", "13px"]}
              marginTop={"12px"}>
              Rings
            </Box>
            {/* <Spacer /> */}
            <Box
              w={["30px", "40px", "50px", "70px"]}
              h="10"
              fontSize={["7px", "9px", "11px", "13px"]}
              marginTop={"12px"}>
              {" "}
              <Link>Clear All</Link>
            </Box>
            {/* <Spacer /> */}
          </Flex>

          <Flex>
            <Button
              w={"60px"}
              h="40px"
              bg="white"
              _hover={{ bg: "blue", color: "white" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              marginLeft={"10px"}
              borderRadius={"10px"}>
              All
            </Button>

            <Button
              w={["200px", "170px", "80px", "120px"]}
              h="40px"
              bg="white"
              _hover={{ bg: "blue", color: "white" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              marginLeft={["7px", "10px", "15px", "20px"]}
              borderRadius={"10px"}>
              {" "}
              <Link>Try at Home</Link>
            </Button>

            <Button
              w={["250px", "150px", "120px", "110px"]}
              h="40px"
              bg="white"
              _hover={{ bg: "blue", color: "white" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              marginLeft={["7px", "10px", "15px", "20px"]}
              borderRadius={"10px"}>
              Designs in Store
            </Button>

            <Button
              w={["250px", "200px", "110px", "110px"]}
              h="40px"
              bg="white"
              _hover={{ bg: "blue", color: "white" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              marginLeft={["7px", "10px", "15px", "20px"]}
              borderRadius={"10px"}>
              {" "}
              <Link>Fast Delivery</Link>
            </Button>
            {/* <Spacer />
 <Spacer /> */}
            <Button
              w="75px"
              h="40px"
              bg="white"
              _hover={{ bg: "blue", color: "white" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              marginLeft={["7px", "10px", "15px", "20px"]}
              borderRadius={"10px"}>
              {" "}
              <Link>New In</Link>
            </Button>
            <Spacer />
            <Select
              placeholder="Select the type"
              w={{ sm: "7%", md: "20%", lg: "20%", xl: "20%" }}
              fontSize={["7px", "9px", "11px", "13px"]}
              bg="white"
              ml="10px"
              onChange={handelCh}>
              <option value="Discount">Discount</option>
              <option value="desc">Price:Low to High</option>
              <option value="asc">Price:High to low</option>
              <option value="Latest">Latest</option>
              <option value="Featured">Featured</option>
            </Select>
          </Flex>
        </Box>
      </Box>
      <br />
      <Box
        textAlign={"left"}
        w={"95%"}
        margin={"auto"}
        fontSize={["7px", "9px", "11px", "16px"]}>
        <h2>
          <b>Earrings</b> 2259 Designs
        </h2>
      </Box>
      <div>
        <Flex>
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            m="30px"
            bg="white"
            w={["15%", "20%", "28%", "32%"]}
            borderRadius={"20px"}>
            <Sidebar />
          </Box>

          {/* Products Detail */}

          <br />

          {/* <div className="mediaquery"> */}
          <Box
            m="30px"
            bg="white"
            w={["60%", "70%", "80%", "90%"]}
            borderRadius={"20px"}>
            {isLoading ? (
              <Center>
                  <Spinner
                    thickness="8px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                    mt={200}
                  />
              </Center>
            ) : (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
                spacing={7}>
                {products.map((el) => (
                  <ProductsCard key={el._id} data={el} />
                ))}
              </SimpleGrid>
            )}
          </Box>
          {/* </div> */}

          <br />
        </Flex>
        <br />

        <Box marginLeft={"70px"}>
          <Button
            disabled={page === 1}
            bg="violet"
            mr="10px"
            w={["10px", "20px", "30px", "80px"]}
            fontSize={["5px", "6px", "8px", "12px"]}
            h={["25px", "27px", "30px", "40px"]}
            onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          <Button
            w={["10px", "20px", "30px", "80px"]}
            fontSize={["5px", "6px", "8px", "12px"]}
            h={["25px", "27px", "30px", "40px"]}>
            {page}
          </Button>
          <Button
            bg="violet"
            ml="10px"
            w={["10px", "20px", "30px", "80px"]}
            fontSize={["5px", "6px", "8px", "12px"]}
            h={["25px", "27px", "30px", "40px"]}
            onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Ring;
