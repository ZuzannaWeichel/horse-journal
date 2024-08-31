import { MantineProvider } from '@mantine/core';

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horse Journal App",
  description: "Keep track of your rides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MantineProvider>{children}</MantineProvider></body>
    </html>
  );
}
