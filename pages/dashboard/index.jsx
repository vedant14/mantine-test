import { Layout } from "@/components/Layout";
import { FlowList } from "@/components/FlowList";
import { Card, Flex, Group, Text, Title } from "@mantine/core";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Flex>
          <Card shadow="sm" padding="lg" w="350px">
            <Group justify="space-start" mt="md" mb="xs">
              <Title order={1}>400</Title>
              <Text fw={500}>Billing labels shipped</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Usage is off the charts!
            </Text>
          </Card>
        </Flex>
        <FlowList />
      </Layout>
    </>
  );
}
