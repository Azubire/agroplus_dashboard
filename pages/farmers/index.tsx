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
import Image from "next/image";
import React from "react";
import { FiDelete } from "react-icons/fi";
import baseUrl from "../utils/helpers";

interface IFarmers {
  data: {
    id: number;
    fullname: string;
    img: string;
    email: string;
    accountBalance: number;
    createdAt: string;
  }[];
}

const Farmers: NextPage<IFarmers> = ({ data }) => {
  const deleteFarmer = async (id: number) => {
    try {
      const { data } = await (
        await fetch(`${baseUrl}/admin/farmer/delete/${id}`, {
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
              {data.map((item, index) => (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Image
                      src={`${baseUrl}/images/users/${item.img}`}
                      alt={item.fullname}
                      height={40}
                      width={40}
                    />
                  </Td>
                  <Td>{item.fullname}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.accountBalance}</Td>
                  <Td>{item.createdAt}</Td>
                  <Td>
                    <HStack justifyContent="center">
                      <IconButton
                        aria-label="delete advert"
                        onClick={() => deleteFarmer(item.id)}
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
      ) : (
        <Text>No data to show!</Text>
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await (await fetch(`${baseUrl}/admin/farmers`)).json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default Farmers;
