import { Layout } from "@/components/Layout";
import { FlowList } from "@/components/FlowList";
import { Button, Card, Flex, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function BillingLabel() {
  return (
    <Layout title="Billing Label - Template">
      <Flex justify="space-between">
        <Card shadow="sm" padding="lg" w="350px">
          <Group justify="space-start" mt="md" mb="xs">
            <Title order={1}>400</Title>
            <Text fw={500}>Billing labels shipped</Text>
          </Group>
          <Text size="sm" c="dimmed">
            Usage is off the charts!
          </Text>
        </Card>
        <Link href="billing-label/new">
          <Button>New Template</Button>
        </Link>
      </Flex>
      <FlowList />
    </Layout>
  );
}
