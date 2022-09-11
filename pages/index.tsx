import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <Box maxW="container.xl" mx="auto">
      <Head>
        <title>Welcome To Agro Plus</title>
      </Head>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={2}>
        {Array.from([5, 1, 4, 6]).map((item) => (
          <Card key={item} height={150}>
            <Text>Current Users</Text>
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r,cyan.500,cyan.100)"
              bgClip="text"
            >
              500
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
            >
              <Text alignSelf="center" fontSize="2xl" fontWeight="bold">
                50
              </Text>
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
