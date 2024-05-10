import { Paper, Table } from "@mantine/core";
import Link from "next/link";

const elements = [
  {
    name: "Billing Label",
    link: "/templates/billing-label",
    error_count: 7,
    runs: 14,
  },
  {
    name: "Invoice",
    error_count: 7,
    runs: 14,
    link: "/templates/invoice",
  },
];

export function FlowList() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.runs}</Table.Td>
      <Table.Td>{element.error_count}</Table.Td>
      <Table.Td>
        <Link href={`/dashboard${element.link}`}>View</Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper p="md" shadow="sm" mt="xl">
      <Table horizontalSpacing="xl" verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Flow Name</Table.Th>
            <Table.Th>Total runs</Table.Th>
            <Table.Th>Error count</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
}
