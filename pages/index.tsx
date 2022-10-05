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

const data = [
  {
    title: "Current Users",
    value: 12,
    to: "/farmers",
    icon: <FiUsers color="white" size={25} />,
  },
  {
    title: "Number Of Adverts",
    value: 120,
    to: "/ads",
    icon: <FiTrendingUp color="white" size={25} />,
  },
  {
    title: "Number Of Distributors",
    value: 120,
    to: "/distributors",
    icon: <FiCompass color="white" size={25} />,
  },
  {
    title: "Total Orders",
    value: 120,
    to: "/orders",
    icon: <FiShoppingCart color="white" size={25} />,
  },
];

export default function Home() {
  return (
    <Box maxW="container.xl" mx="auto">
      <Head>
        <title>Welcome To Agro Plus</title>
      </Head>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={2}>
        {data.map((item, index) => (
          <Link href={item.to} key={index}>
            <Card height={150}>
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
                {item.icon}
              </Flex>
            </Card>
          </Link>
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
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2} mt={5}>
        <Card height={250}>
          <Text></Text>
        </Card>
        <Card height={250}>
          <Text></Text>
        </Card>
      </SimpleGrid>
      <Box></Box>
    </Box>
  );
}
