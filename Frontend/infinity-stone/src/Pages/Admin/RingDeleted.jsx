import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const RingDeleted = ({ suspendacc }) => {
  return (
    <Box>
          <TableContainer>
        <Table variant="striped" colorScheme="tomato" color={"red"}>
          <TableCaption>All Deleted Rings Products</TableCaption>
          <Thead>
            <Tr flexDirection={"column"}>
              <Th>S.No</Th>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Original Price</Th>
              <Th>Image</Th>
              <Th>Size</Th>
            </Tr>
          </Thead>
          <Tbody>
            {suspendacc &&
              suspendacc.reverse().map((el, i) => {
                return (
                  <Tr key={el.id}>
                     <Td>{i + 1}</Td>
                    <Td>{el.title}</Td>
                    <Td>{el.price}</Td>
                    <Td>{el.originalprice}</Td>
                    <Td  w={"8%"}><Image w={"fit-content"} src={el.imageurl} alt={el.id}/></Td>
                    <Td>{el.size}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RingDeleted;
