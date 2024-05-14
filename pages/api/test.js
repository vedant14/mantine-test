// pages/api/generatePDF.js
// https://dev.to/lwhiteley/series/19996
// https://www.bannerbear.com/blog/ways-to-speed-up-puppeteer-screenshots/
// ---

import puppeteer from "puppeteer";
const minimal_args = [
  "--autoplay-policy=user-gesture-required",
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-breakpad",
  "--disable-client-side-phishing-detection",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-dev-shm-usage",
  "--disable-domain-reliability",
  "--disable-extensions",
  "--disable-features=AudioServiceOutOfProcess",
  "--disable-hang-monitor",
  "--disable-ipc-flooding-protection",
  "--disable-notifications",
  "--disable-offer-store-unmasked-wallet-cards",
  "--disable-popup-blocking",
  "--disable-print-preview",
  "--disable-prompt-on-repost",
  "--disable-renderer-backgrounding",
  "--disable-setuid-sandbox",
  "--disable-speech-api",
  "--disable-sync",
  "--hide-scrollbars",
  "--ignore-gpu-blacklist",
  "--metrics-recording-only",
  "--mute-audio",
  "--no-default-browser-check",
  "--no-first-run",
  "--no-pings",
  "--no-sandbox",
  "--no-zygote",
  "--password-store=basic",
  "--use-gl=swiftshader",
  "--use-mock-keychain",
];
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Launch Puppeteer
      const { name } = req.body; // Get variables from request body
      const browser = await puppeteer.launch({
        headless: true,
        args: minimal_args,
      });
      const page = await browser.newPage();

      // Load the locally generated React page
      await page.goto(`http://localhost:3000/dashboard`, {
        waitUntil: "networkidle2",
      });

      // Generate PDF
      const pdfBuffer = await page.pdf({ format: "A4" });

      // Close Puppeteer browser
      await browser.close();

      // Set response headers
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="output.pdf"');

      // Send the PDF buffer as response
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
