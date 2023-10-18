import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/components/server";

const inter = Inter({ subsets: ["latin"], display: "block" });

export const metadata: Metadata = {
    title: "Firebase Next.js CRUD",
    description: "Firebase Next.js CRUD",
};

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
