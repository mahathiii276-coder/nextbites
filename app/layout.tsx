import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Your Next Favorite Recipe",
  description:
    "Discover delicious recipes, explore cuisines, and find your next favorite meal with NextBites.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
