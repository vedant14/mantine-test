// React component
import React, { useState } from "react";

import { Button } from "@mantine/core";

const MyComponent = () => {
  const [pdfLoading, setPdfLoading] = useState(false);

  const handleGeneratePDF = async () => {
    try {
      setPdfLoading(true);
      const pdfBlob = await getPDF(); // API call to generate PDF
      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "report.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleGeneratePDF} loading={pdfLoading}>
        Generate PDF
      </Button>
    </div>
  );
};

export default MyComponent;
