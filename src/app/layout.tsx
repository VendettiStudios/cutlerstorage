import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Storage & Land for Lease in Cutler, CA | RV, Auto, & More",
  description: "Secure outdoor storage for RVs, autos, and containers, plus 8 acres of prime land for lease in Cutler, CA. Flexible leasing options for farming or other ventures. Contact us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
