import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: ReactNode;
  route: NextRouter;
}

const NavItem = ({ icon, to, children, route, ...rest }: NavItemProps) => {
  return (
    <Link
      href={to}
      style={{
        textDecoration: "none",
      }}
    >
      <Flex
        sx={{
          backgroundColor: route.pathname === to ? "cyan.400" : "",
          color: route.pathname == to ? "white" : "",
        }}
        align="center"
        p="3"
        m="1"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.100",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
