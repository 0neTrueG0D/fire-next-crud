"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/components";

const inter = Inter({ subsets: ["latin"], display: "block" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
