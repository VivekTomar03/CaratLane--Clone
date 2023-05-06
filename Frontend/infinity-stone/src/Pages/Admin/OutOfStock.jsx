import { Box } from "@chakra-ui/react";
import React from "react";
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

const OutOfStock = () => {
  return (
    <Box>
    <TableContainer bg={"teal"}>
      <Table variant="simple" color={"yellow"}>
        <TableCaption>All Suspended Account</TableCaption>
        <Thead color={"white"}>
          <Tr color={"white"}>
            <Th color={"white"}>S.No</Th>
            <Th color={"white"}>Name</Th>
            <Th color={"white"}>Email</Th>
            <Th color={"white"}>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Dummyuser1</Td>
            <Td>Dummyuser1@gmail.com</Td>
            <Td>12345</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Dummyuser2</Td>
            <Td>Dummyuser2@gmail.com</Td>
            <Td>12345</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Dummyuser3</Td>
            <Td>Dummyuser3@gmail.com</Td>
            <Td>12345</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Dummyuser4</Td>
            <Td>Dummyuser4@gmail.com</Td>
            <Td>12345</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
  );
}

export default OutOfStock;
