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
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  Select,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { baseUrl } from "../utils/helpers";

export interface IOrders {
  data: {
    id: number;
    name: string;
    momoNumber: string;
    amount: number;
    trx_code: string;
    userId: number;
    status: string;
    createdAt: string;
  }[];
}

const Deposits: NextPage<IOrders> = ({ data }) => {
  const [isOpen, onClose] = React.useState(false);
  const [selected, setSelected] = React.useState({
    id: 0,
    selected: "",
  });
  const [loading, setLoading] = React.useState(false);
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
  const updateTransaction = async (id: number) => {
    setLoading(true);
    try {
      const data = await (
        await fetch(`${baseUrl}/admin/deposit/update/${id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selected),
        })
      ).json();

      console.log(data);
      setLoading(false);
      onClose(false);
    } catch (error) {
      console.log(error);
      onClose(false);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // console.log(selected);
  }, [selected, loading]);
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={() => onClose(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Select option"
              onChange={(e) =>
                setSelected((prev) => ({
                  ...prev,
                  selected: e.currentTarget.value,
                }))
              }
            >
              <option value="1">Pending</option>
              <option value="2">Confirm</option>
              <option value="3">Reject</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => onClose(false)}>
              Close
            </Button>
            <Button
              variant="ghost"
              isLoading={loading}
              onClick={() => updateTransaction(selected.id)}
            >
              Update Status
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {data.length > 0 ? (
        <TableContainer>
          <Table variant="simple" size="sm">
            <TableCaption>List of all Orders</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>User Name</Th>
                <Th>Momo Number</Th>
                <Th>Amount</Th>
                <Th>Transaction Code</Th>
                <Th>Status</Th>
                <Th>Date Created</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.momoNumber}</Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.trx_code}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item.createdAt}</Td>
                  <Td>
                    <HStack justifyContent="center">
                      <IconButton
                        aria-label="delete advert"
                        onClick={() => {
                          setSelected((prev) => ({ ...prev, id: item.id }));
                          return onClose(true);
                        }}
                      >
                        <FiEdit color="green" />
                      </IconButton>
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
                <Th>User Name</Th>
                <Th>Momo Number</Th>
                <Th>Amount</Th>
                <Th>Transaction Code</Th>
                <Th>Status</Th>
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
    const { data } = await (
      await fetch(`${baseUrl}/admin/transactions`)
    ).json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default Deposits;
