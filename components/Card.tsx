import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IPageProps {
  children: ReactNode;
  height: number;
}

const Card: NextPage<IPageProps> = ({ children, height }) => {
  return (
    <Box
      position="relative"
      h={height}
      shadow="base"
      bg="white"
      p={3}
      pb={0}
      borderBottom="ActiveBorder"
      borderRadius="lg"
      _hover={{ shadow: "lg", cursor: "pointer" }}
    >
      {children}
    </Box>
  );
};

export default Card;
