import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";
import Link from "next/link";
import {
  FiCompass,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { GetServerSideProps } from "next";

interface IHome {
  data: {
    id: number;
    title: string;
    value: number | null;
    to: string;
  }[];
}

export default function Home({ data }: IHome) {
  const renderIcon = (id: number) => {
    let icon;
    switch (id) {
      case 1:
        icon = <FiUsers color="white" size={25} />;
        break;
      case 2:
        icon = <FiTrendingUp color="white" size={25} />;
        break;
      case 3:
        icon = <FiCompass color="white" size={25} />;
        break;
      case 4:
        icon = <FiShoppingCart color="white" size={25} />;
        break;

      default:
        <FiCompass color="white" size={25} />;
        break;
    }
    return icon;
  };
  return (
    <Box maxW="container.xl" mx="auto">
      <Head>
        <title>Welcome To Agro Plus</title>
      </Head>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={2}>
        {data.map((item, index) => (
          <Card height={150} key={index}>
            <Text>{item.title}</Text>
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r,cyan.500,cyan.100)"
              bgClip="text"
            >
              {item.value}
            </Text>
            <Flex
              bgGradient="linear(to-r,cyan.500,cyan.300)"
              w={51}
              h={51}
              borderRadius="full"
              position="absolute"
              bottom={2}
              right={2}
              justifyContent="center"
              alignItems="center"
            >
              {renderIcon(item.id)}
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2} mt={5}>
        <Card height={250}>
          <Text></Text>
        </Card>
        <Card height={250}>
          <Text></Text>
        </Card>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2} mt={5}>
        <Card height={250}>
          <Text></Text>
        </Card>
        <Card height={250}>
          <Text></Text>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await (
      await fetch("http://localhost:3001/admin/metrics")
    ).json();

    return {
      props: { data },
    };
  } catch (error) {
    return { props: {} };
  }
};
