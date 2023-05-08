import { Box, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import Userchart from "../../Components/Userchart";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import OutOfStock from "./OutOfStock";
import AllEaring from "./AllEaring";
import EaringDelete from "./EaringDelete";
const data = {
  labels: [
    "All Oders",
    "Order In Progress",
    "Order Under Return",
    "Order Rejected",
    "Defected Order",
    "Out OF Stock",
    "Under Offer Order",
  ],
  datasets: [
    {
      label: "Users %",
      data: [
        Math.floor(Math.random() * 1500 + 800),
        Math.floor(Math.random() * 1000 + 800),
        Math.floor(Math.random() * 800 + 500),
        Math.floor(Math.random() * 500 + 100),
        Math.floor(Math.random() * 300 + 80),
        Math.floor(Math.random() * 400 + 80),
        Math.floor(Math.random() * 800 + 80),
      ],
      borderColor: "black",
      backgroundColor: "Orange",
    },
  ],
};
const EaringManage = () => {
  const [suspendacc, setsuspendacc] = useState([]);
  return (
    <Box bg={"#8BF5FA"} mt={"100px"} className="Main">
      <Center>
        <Userchart data={data} />
      </Center>

      <Box mt={"20px"}>
        <Button
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
          m={2}
          colorScheme="teal"
          variant="solid"
          _hover={{ variant: "outline", colorScheme: "yellow" }}
          ml={"80%"}
        >
          Admin
        </Button>

        <Tabs position="relative" variant="solid-rounded">
          <Center>
            <TabList w={"100%"}>
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"space-around"}
                flexDirection={"row"}
              >
                <Tab>All Earings Products</Tab>
                <Tab>Out Of Stock Earnings</Tab>
                <Tab>Delete Products</Tab>
              </Box>
            </TabList>
          </Center>
          <TabPanels >
            <TabPanel
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500"
            >
              <AllEaring
                setsuspendacc={setsuspendacc}
                suspendacc={suspendacc}
              />
            </TabPanel>
            <TabPanel>
              <OutOfStock />
            </TabPanel>
            <TabPanel>
              <EaringDelete suspendacc={suspendacc} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default EaringManage;
