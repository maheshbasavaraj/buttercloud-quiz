import type { Metadata } from "next";
console.log("--- FRONTEND CODE IS UPDATING ---"); // Test message
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackArchitect Quiz",
  description: "Learn software stacks and tech",
};

// import { GoogleOAuthProvider } from '@react-oauth/google';

// const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''; // Get from .env.local
// console.log('Frontend Google Client ID:', GOOGLE_CLIENT_ID); // Debugging line

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <ThemeProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className="font-sans" suppressHydrationWarning>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
    // </GoogleOAuthProvider>
  );
}
