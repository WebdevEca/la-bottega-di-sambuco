import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "La Bottega di Sambuco",
  description:
    "Esplora la mia arte attraverso le mie creazione tra gioielli e vestiti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant_garamond.className}>{children}</body>
    </html>
  );
}
