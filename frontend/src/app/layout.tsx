import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ButterCloud Quiz",
  description: "Learn software stacks and tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ButterCloud Quiz</h1>
            <a href="/scenarios" className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/80">
              Home
            </a>
          </header>
          <main className="flex-grow p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
