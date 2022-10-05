import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  IconButton,
  Tfoot,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { FiDelete } from "react-icons/fi";

interface IFarmers {
  data: {
    id: number;
    name: string;
    img: string;
    email: string;
    accountBalance: number;
    createdAt: string;
  };
}

const Farmers: NextPage<IFarmers> = ({ data }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of all farmers</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Image</Th>
              <Th>name</Th>
              <Th>email</Th>
              <Th>account balance</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>img</Td>
              <Td>Azubire Peter</Td>
              <Td>agroplus@gmail.com</Td>
              <Td>251.00</Td>
              <Td>02 Oct 2022</Td>
              <Td>
                <HStack justifyContent="center">
                  <IconButton aria-label="delete advert">
                    <FiDelete color="red" />
                  </IconButton>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>#</Th>
              <Th>Image</Th>
              <Th>name</Th>
              <Th>email</Th>
              <Th>account balance</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Farmers;
