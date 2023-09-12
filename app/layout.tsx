import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Control from "./components/Control";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "egoing",
  description: "egoing next",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch("http://localhost:3001/topics", {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <hr />
        <br />

        <ol>
          {topics.map((topic: { id: string; title: string }) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <br />
        <hr />
        <Control />
      </body>
    </html>
  );
}
