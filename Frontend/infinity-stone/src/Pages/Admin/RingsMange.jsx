import { Box, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import Userchart from "../../Components/Userchart";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllRings from "./AllRings";
import { useEffect } from "react";
import RingDeleted from "./RingDeleted";
import OutOfStock from "./OutOfStock";

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
      backgroundColor: "#D21312",
    },
  ],
};
const RingsMange = () => {
  const [suspendacc, setsuspendacc] = useState([]);

  return (
    <Box bg={"#8BF5FA"} mt={"100px"} className="Main">
      <Center>
        <Userchart data={data} />
      </Center>

      <Box mt={"20px"}>
        <Button
          m={2}
          colorScheme="teal"
          variant="solid"
          _hover={{ variant: "outline", colorScheme: "yellow" }}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
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
                <Tab>All Rings Products</Tab>
                <Tab>Out Of Stock</Tab>
                <Tab>Delete Products</Tab>
              </Box>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <AllRings setsuspendacc={setsuspendacc} suspendacc={suspendacc} />
            </TabPanel>
            <TabPanel>
              <OutOfStock />
            </TabPanel>
            <TabPanel>
              <RingDeleted suspendacc={suspendacc} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default RingsMange;
