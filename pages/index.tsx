import { SignInForm } from "@/components/SignInForm";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container size="xs">
        <SignInForm />
      </Container>
    </>
  );
}
