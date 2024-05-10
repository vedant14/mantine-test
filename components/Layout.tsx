import { ReactNode } from "react";
import { Flex, Box } from "@mantine/core";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex>
      <NavBar />
      <Box bg="#ebefff" w="100%">
        <Box p="xl" mt="md">
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
