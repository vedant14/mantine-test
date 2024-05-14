import { Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const PdfPage = () => {
  const router = useRouter();
  const { name } = router.query; // Access variables from query parameters
  return (
    <div className="pdf-body">
      <Title order={1} bg="gray.1">
        Vedant
      </Title>
      <h1>Welcome to PDF Page, {name}</h1>
      <p>This is the content of the PDF page.</p>
    </div>
  );
};

export default PdfPage;
