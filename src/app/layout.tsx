import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardNav from "@/components/dashboard-nav";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SB Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body >
      <main >
        <div className='flex'>
          <DashboardNav/>
          <div className='flex flex-col w-[calc(100%-300px)] min-h-[calc(100%-60px)]'>
            <NavBar/>
            <div className='p-4'>
              {children}
            </div>
          </div>
        </div>
      </main>
      </body>
      </html>
  );
}
