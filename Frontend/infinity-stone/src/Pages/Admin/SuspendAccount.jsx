import { Box } from "@chakra-ui/react";
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
import React from "react";

const SuspendAccount = ({ suspendacc }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="tomato" color={"red"}>
          <TableCaption>All Suspended Account</TableCaption>
          <Thead>
            <Tr flexDirection={"column"}>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
              <Th>Gender</Th>
            </Tr>
          </Thead>
          <Tbody>
            {suspendacc &&
              suspendacc.reverse().map((el, i) => {
                return (
                  <Tr key={el.id}>
                    <Td>{i + 1}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.password}</Td>
                    <Td>{"Male"}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SuspendAccount;
