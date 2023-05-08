import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Userchart from "../../Components/Userchart";
import AllUsers from "./AllUsers";
import { useState } from "react";
import SuspendAccount from "./SuspendAccount";
import ReviewAccount from "./ReviewAccount";
import { Link } from "react-router-dom";
const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Users %",
      data: [
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
        Math.floor(Math.random() * 100 + 80),
      ],
      borderColor: "black",
      backgroundColor: "#F9F54B",
    },
  ],
};

const UserPage = () => {
  const [suspendacc, setsuspendacc] = useState([]);
  console.log(suspendacc);
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
        <Link to={"/admin"}>Aadmin</Link>
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
                <Tab>All Users</Tab>
                <Tab>User Under Review</Tab>
                <Tab>Suspended Account</Tab>
              </Box>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <AllUsers setsuspendacc={setsuspendacc} suspendacc={suspendacc} />
            </TabPanel>
            <TabPanel data-aos="fade-up" data-aos-duration="3000">
              <ReviewAccount />
            </TabPanel>
            <TabPanel data-aos="fade-up" data-aos-duration="3000">
              <SuspendAccount suspendacc={suspendacc} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default UserPage;
