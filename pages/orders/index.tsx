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
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { FiDelete } from "react-icons/fi";
import baseUrl from "../utils/helpers";

export interface IOrders {
  data: {
    id: number;
    orderCode: string;
    User: {
      id: number;
      Distributor: {
        name: string;
      };
    };
    grandTotal: number;
    paymentType: "account" | "momo";
    paymentStatus: "paid" | "unpaid";
    deliveryStatus: "delivered" | "pending" | "rejected";
    createdAt: string;
  }[];
}

const Orders: NextPage<IOrders> = ({ data }) => {
  const deleteOrder = async (id: number) => {
    try {
      const { data } = await (
        await fetch(`${baseUrl}/admin/order/delete/${id}`, {
          method: "delete",
        })
      ).json();

      console.log(data);
    } catch (error) {}
  };
  return (
    <Box>
      {data.length > 0 ? (
        <TableContainer>
          <Table variant="simple" size="sm">
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
              {data.map((item, index) => (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>{item.orderCode}</Td>
                  <Td>{item.User.Distributor.name}</Td>
                  <Td>{item.grandTotal}</Td>
                  <Td>{item.paymentType}</Td>
                  <Td>{item.paymentStatus}</Td>
                  <Td>{item.deliveryStatus}</Td>
                  <Td>{item.createdAt}</Td>
                  <Td>
                    <HStack justifyContent="center">
                      <IconButton
                        aria-label="delete advert"
                        onClick={() => deleteOrder(item.id)}
                      >
                        <FiDelete color="red" />
                      </IconButton>
                    </HStack>
                  </Td>
                </Tr>
              ))}
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
      ) : (
        <Text>No data to show</Text>
      )}
    </Box>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await (await fetch(`${baseUrl}/admin/orders`)).json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default Orders;
