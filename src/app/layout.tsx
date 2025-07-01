// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/lib/providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhiko — Buy Source Code',
  description: 'Premium Project Source Codes at Affordable Prices',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
   <body
        className={`${inter.className} bg-[#0e0e12] text-white min-h-screen`}
      >        <Providers>
          <Navbar/>
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer/>
             <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
