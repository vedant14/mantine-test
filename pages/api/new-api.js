import { renderToFile } from "@react-pdf/renderer";
import { Test } from "@/components/Test";
export default async function handler(req, res) {
  const { shop } = req.body;
  await renderToFile(<Test shop={shop} />, `./example1.pdf`);
  res.status(200).json({ name: "John Doe" });
}
