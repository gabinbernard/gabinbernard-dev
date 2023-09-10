import "./reset.css";
import "./globals.css";
import "./section.css";
import "./more.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gabin Bernard | Développeur web full-stack",
    description:
        "Bonjour, je suis Gabin BERNARD, développeur web full-stack autodidacte et passionné.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
