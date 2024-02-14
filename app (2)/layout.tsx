import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>SMC Database</title>
      <meta name="description" content="" />
      <body>{children}</body>
    </html>
  );
}
