import React from "react";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: "Dashboard",
    icon: FiHome,
    to: "/",
  },
  { name: "Ads", icon: FiTrendingUp, to: "/ads" },
  { name: "Distributors", icon: FiCompass, to: "/distributors" },
  { name: "Farmers", icon: FiUsers, to: "/farmers" },
  { name: "Orders", icon: FiShoppingCart, to: "/orders" },
  { name: "Deposits", icon: FiDollarSign, to: "/deposits" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

function SideBar({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Agro Plus
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

export default SideBar;
