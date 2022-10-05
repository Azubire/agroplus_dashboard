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
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
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
  }[];
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
            {data.map((item, index) => (
              <Tr key={item.id}>
                <Td>{index + 1}</Td>
                <Td>
                  <Image
                    src={`http://localhost:3001/images/distributors/${item.img}`}
                    alt={item.name}
                    height={40}
                    width={40}
                  />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.website}</Td>
                <Td>{item.location}</Td>
                <Td>{item.status}</Td>
                <Td>{item.createdAt}</Td>
                <Td>
                  <HStack justifyContent="center">
                    <IconButton aria-label="delete advert">
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await (
      await fetch("https://localhost:3001/admin/distributors")
    ).json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Distributors;
