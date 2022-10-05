import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { FiDelete } from "react-icons/fi";

interface IAds {
  id: number;
  title: string;
  price: number;
  img: string;
  createdAt: string;
  User: {
    fullname: string;
  };
  Category: {
    name: string;
  };
}

const Ads: NextPage<IAds> = (props) => {
  console.log(props);

  const get = async () => {
    try {
      const data = await fetch("http://localhost:3001/admin/ads");
      console.log(data.json());
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of all orders</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Farmer</Th>
              <Th>Category</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
              {/* <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>img</Td>
              <Td>Crop for sale</Td>
              <Td>Ghc. 205</Td>
              <Td>Azubire</Td>
              <Td>Cereal</Td>
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
              <Th>Title</Th>
              <Th>Farmer</Th>
              <Th>Category</Th>
              <Th>Date Created</Th>
              <Th>Options</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Ads;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("first");
  try {
    const data = await fetch("http://localhost:3001/admin/ads");
    console.log(data.json());

    return {
      props: { data },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        // data:{name:"sas"}
      },
    };
  }
};
