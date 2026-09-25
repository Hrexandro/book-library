import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BooksProvider } from "./context/BooksContext";

import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BooksProvider>
          <div className="app-layout">
            <Sidebar />

            <main className="main-content">
              {children}
            </main>
          </div>
        </BooksProvider>
      </body>
    </html>
  );
}