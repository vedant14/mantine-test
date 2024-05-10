import { UnstyledButton, Stack, rem, Text } from "@mantine/core";
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

  text: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({
  icon: Icon,
  text,

  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      className={classes.link}
      data-active={active || undefined}
    >
      <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      <Text className={classes.linkText}>{text}</Text>
    </UnstyledButton>
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
  const router = useRouter();
  const path = router.pathname;

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      text={link.label}
      active={
        link.link === "/"
          ? path === "/dashboard"
          : path.includes(link.label.toLowerCase())
      }
      onClick={() => router.push(`/dashboard/${link.link}`)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} text="Change Account" />
        <NavbarLink icon={IconLogout} text="Logout" />
      </Stack>
    </nav>
  );
}
