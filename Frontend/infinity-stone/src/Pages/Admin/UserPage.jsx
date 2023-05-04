import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Userchart from "../../Components/Userchart";
import AllUsers from "./AllUsers";
import { useState } from "react";
import SuspendAccount from "./SuspendAccount";
import ReviewAccount from "./ReviewAccount";
const data = {
  labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: 'Users %',
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
      backgroundColor: '#F9F54B',
    }
  ],
}

const UserPage = () => {
    const [suspendacc , setsuspendacc] = useState([])
    console.log(suspendacc);
  return (
    <Box  bg={"#8BF5FA"} mt={"100px"} className="Main">
      <Center >
        <Userchart data={data} />
      </Center>

      <Box  mt={"20px"}>
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
            <TabPanel>
             <AllUsers setsuspendacc={setsuspendacc} suspendacc={suspendacc}/>
            </TabPanel>
            <TabPanel>
           <ReviewAccount/>
            </TabPanel>
            <TabPanel>
            <SuspendAccount suspendacc={suspendacc}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default UserPage;
