import { ReactNode } from "react";
import { Box, Title } from "@mantine/core";
import { NavBar } from "./NavBar";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  title: String;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <Box>
      <NavBar />
      <Box className={classes.main}>
        <Box px="xl" mt="40px">
          <div className={classes.title}>
            <Title order={2}>{title}</Title>
          </div>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
