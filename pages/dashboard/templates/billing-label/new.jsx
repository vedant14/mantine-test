import { Layout } from "@/components/Layout";
import { FlowList } from "@/components/FlowList";
import { Button, Card, Flex, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function BillingLabelNew() {
  const generatePDF = async () => {
    var name = "Anjali";
    try {
      const response = await fetch("/api/test", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
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

        <Button onClick={generatePDF}>Generate PDF</Button>
      </Flex>
      <FlowList />
    </Layout>
  );
}
