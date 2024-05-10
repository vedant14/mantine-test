import { useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Box,
} from "@mantine/core";
import {
  IconHome2,
  IconFileText,
  IconUsers,
  IconAsset,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./NavBar.module.css";
import { useRouter } from "next/router";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, link: "/", label: "Home" },
  { icon: IconFileText, link: "/templates/billing-label", label: "Templates" },
  { icon: IconAsset, link: "/assets", label: "Assets" },
  { icon: IconUsers, link: "/teams", label: "Teams" },
  { icon: IconSettings, link: "/settings", label: "Settings" },
];

export function NavBar() {
  const [active, setActive] = useState(2);
  const router = useRouter();
  const path = router.pathname;

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={
        link.link === "/" ? path === "/dashboard" : path.includes(link.link)
      }
      onClick={() => router.push(`/dashboard/${link.link}`)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Box c="gray.0">Some Lgo</Box>
      </Center>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
