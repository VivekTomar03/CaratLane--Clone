import {
  Box,
  Text,
  Card,
  Grid,
  Flex,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "../../Components/Chart";

import Chart2 from "../../Components/Chart2";
const AdminMain = () => {
  return (
    <Box w={"100%"} bg={"#8BF5FA"} mt={"100px"} className="Main">
      <Center m={5}>
        <Heading color="tomato" fontSize="4xl" as={"b"}>
          {" "}
          WelCome To Admin Portal
        </Heading>
      </Center>
      <Grid
        gap={10}
        justifyContent={"space-between"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
        }}
      >
        <Chart />

        <Chart2 />
      </Grid>

      <Box className="RightPart">
        <Grid margin={5} gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }} gap={10}>
          <Card
            color={"white"}
            bg={"#150E56"}
            padding="20px"
            // onClick={() => handleEndPoint("users", "users")}
          >
            <Flex flexDirection={"row"} justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :{6}
              </Text>
              <Image
                w={"100px"}
                src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage users{" "}
              </Text>
            </Center>
          </Card>

          <Card
            color={"white"}
            bg={"#57C5B6"}
            padding="20px"
            // onClick={() => handleEndPoint("admin", "mens")}
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :{50}
              </Text>
              <Image
                w={"100px"}
                src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Group.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage Rings
              </Text>
            </Center>
          </Card>

          <Card
            color={"white"}
            bg={"#2D5C7F"}
            padding="20px"
            // onClick={() => handleEndPoint("admin", "women")}
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :{50}
              </Text>
              <Image
                w={"100px"}
                src="https://images.freeimages.com/fic/images/icons/747/network/256/user_group.png"
              />
            </Flex>

            <Text mt={5} fontWeight={"bold"} fontSize={"32px"}>
              Manage Earings{" "}
            </Text>
          </Card>

          <Card
            color={"white"}
            bg={"orange"}
            padding="20px"
            //for order amother function come
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :50
              </Text>
              <Image
                w={"150px"}
                h="100px"
                src="https://www.pngmart.com/files/3/Order-Now-PNG-Free-Download.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage order{" "}
              </Text>
            </Center>
          </Card>

          <Card color={"white"} bg={"#FF004D"} padding="20px">
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                {" "}
                Count: {Math.floor(Math.random() * 90000) + 100000}
              </Text>
              <Image
                w={"100px"}
                src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Total Revenue
              </Text>
            </Center>
          </Card>
        </Grid>
      </Box>

      
    </Box>
  );
};

export default AdminMain;
