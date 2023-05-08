import { Box, Button, Center } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import React from 'react';
import Userchart from '../../Components/Userchart';
const data = {
    labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Users %',
        data: [
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
            Math.floor(Math.random() * 1000 + 500),
          ],
          borderColor: "black",
        backgroundColor: 'green',
      }
    ],
  }
  
const Order = () => {
  return (
    <Box bg={"#8BF5FA"} mt={"100px"} className="Main">
       <Center >
        <Userchart data={data} />
      </Center>
      
      <Box  mt={"20px"}>
      <Button m={2}  colorScheme='teal' variant='solid' _hover={{ variant:"outline", colorScheme:'yellow'}} ml={"80%"}>Admin</Button>

        <Tabs position="relative" variant="solid-rounded">
          <Center>
            <TabList w={"100%"}>
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"space-around"}
                flexDirection={"row"}
              >
                <Tab>All Orders</Tab>
                <Tab>Processing Orders</Tab>
                <Tab>Return Orders / Rejected Orders</Tab>
              </Box>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
             {/* <AllUsers setsuspendacc={setsuspendacc} suspendacc={suspendacc}/> */}
            </TabPanel>
            <TabPanel>
           {/* <ReviewAccount/> */}
            </TabPanel>
            <TabPanel>
            {/* <SuspendAccount suspendacc={suspendacc}/> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Order;
