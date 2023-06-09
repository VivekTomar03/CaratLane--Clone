import {
  Box,
  Text,
  Card,
  Grid,
  Flex,
  Image,
  Heading,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "../../Components/Chart";
import {Link} from "react-router-dom"
import Chart2 from "../../Components/Chart2";
import SimpleSidebar from "./sidebar";
import Typewriter from 'typewriter-effect';
const AdminMain = () => {
  return (
    <Box bg={"#8BF5FA"}  mt={"170px"} className="Main">
       <Flex  gap={-10}>
       
         <Box  display={{base:"none" , md:"block", lg:"block"}} > <SimpleSidebar/></Box>
       
         <Box m={"auto"}>
         <Center m={5}>
        <Heading color="tomato" fontSize="4xl" as={"b"}>
          {" "}
         
          <Typewriter
  options={{
    strings: ['Welcome To Admin Portal'],
    autoStart: true,
    loop: true,
  }}
/>
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
          <Link to={"/admin/users"}>
          <Card
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
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

          </Link>
          
           <Link to={"/admin/managerings"}>
           <Card
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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

           </Link>
         
           <Link to={"/admin/manageearrings"}>
           <Card
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
           </Link>

          <Link to={"/admin/order"}>
          <Card
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
          </Link>

          <Card 
           data-aos="flip-right"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000"
          color={"white"} bg={"#FF004D"} padding="20px">
            
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
       </Flex>
      
    </Box>
  );
};

export default AdminMain;
