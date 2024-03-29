import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from 'react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Movie DB",
  description: "Your go-to source for movies and TV shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Suspense>
            <Header />
            <Navbar />
            <SearchBox />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
