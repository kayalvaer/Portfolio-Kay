//some code reference from nextJS Docs
import "./styles/globals.css";
import { M_PLUS_1_Code } from "next/font/google";
import Nav from "./components/Nav";

const code = M_PLUS_1_Code({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Kay Alvær",
  description: "Developed by Kay Alvær",
  content: "width=device-width, initial-scale=1",
  name: "viewport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body className={code.className}>{children}</body>
    </html>
  );
}
