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
import Image from "next/image";
import React from "react";
import { FiDelete } from "react-icons/fi";
import { baseUrl } from "../utils/helpers";

interface IAds {
  data: {
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
  }[];
}

const Ads: NextPage<IAds> = ({ data }) => {
  const [refresh, setRefresh] = React.useState(false);

  const deleteAd = async (id: number) => {
    try {
      const { data } = await (
        await fetch(`${baseUrl}/admin/ad/delete/${id}`, {
          method: "delete",
        })
      ).json();
      if (data) {
        setRefresh(true);
      }
      console.log(data);
    } catch (error) {}
  };

  React.useEffect(() => {}, [refresh]);
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" size="sm">
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
            {data.map((item, index) => (
              <Tr key={item.id}>
                <Td>{index + 1}</Td>
                <Td>
                  <Image
                    src={`${baseUrl}/images/ads/${item.img}`}
                    alt={item.title}
                    height={40}
                    width={40}
                  />
                </Td>
                <Td>{item.title}</Td>
                <Td>{item.price}</Td>
                <Td>{item.User.fullname}</Td>
                <Td>{item.Category.name}</Td>
                <Td>{item.createdAt}</Td>
                <Td>
                  <HStack justifyContent="center">
                    <IconButton
                      aria-label="delete advert"
                      onClick={() => deleteAd(item.id)}
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
  try {
    const { data } = await (await fetch(`${baseUrl}/admin/ads`)).json();
    // console.log(data);

    return {
      props: { data },
    };
  } catch (error) {
    // console.log("error", error);
    return {
      props: {},
    };
  }
};
