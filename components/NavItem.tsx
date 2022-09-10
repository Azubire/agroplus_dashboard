import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: ReactNode;
}

const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  const route = useRouter();

  console.log(route.pathname);

  return (
    <Link
      href={to}
      style={{
        textDecoration: "none",
        backgroundColor: route.pathname == to ? "cyan.400" : "",
        color: route.pathname == to ? "white" : "",
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
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
