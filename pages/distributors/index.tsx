import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Box,
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

interface IDistributors {
  data: {
    id: number;
    img: string;
    name: string;
    email: string;
    website: string;
    location: string;
    status: string;
    createdAt: string;
  };
}

const Distributors: NextPage<IDistributors> = ({ data }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of all distributors</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Image</Th>
              <Th>name</Th>
              <Th>email</Th>
              <Th>website</Th>
              <Th>location</Th>
              <Th>Status</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>img</Td>
              <Td>Agro Plus</Td>
              <Td>agroplus@gmail.com</Td>
              <Td>www.agroplus.org</Td>
              <Td>Koforidua</Td>
              <Td>Verified</Td>
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
              <Th>website</Th>
              <Th>location</Th>
              <Th>Status</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Distributors;
