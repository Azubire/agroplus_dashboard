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

interface IOrders {
  data: {
    index: number;
    orderCode: string;
    Distributor: {
      name: string;
    };
    grandTotal: number;
    paymentType: "account" | "momo";
    paymentStatus: "paid" | "unpaid";
    deliveryStatus: "delivered" | "pending" | "rejected";
    createdAt: string;
  };
}

const Orders: NextPage<IOrders> = ({ data }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of all Orders</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>order code</Th>
              <Th>distributor</Th>
              <Th>grand total</Th>
              <Th>payment type</Th>
              <Th>payment status</Th>
              <Th>delivery status</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ord4545fasjhjas</Td>
              <Td>Agro Plus</Td>
              <Td>330</Td>
              <Td>account</Td>
              <Td>paid</Td>
              <Td>pending</Td>
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
              <Th>order code</Th>
              <Th>distributor</Th>
              <Th>grand total</Th>
              <Th>payment type</Th>
              <Th>payment status</Th>
              <Th>delivery status</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
