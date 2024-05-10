import { ReactNode } from "react";
import { Box } from "@mantine/core";
import { NavBar } from "./NavBar";
import classes from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <NavBar />
      <Box className={classes.child}>
        <Box p="xl" mt="md">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
