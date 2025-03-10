import "../styles/index.scss";

const isDev = process.env.NODE_ENV === "development";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="Navkar" content="Navkar" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
