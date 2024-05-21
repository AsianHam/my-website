import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abraham Oh Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-shark'>
        <main>{children}</main>
      </body>
    </html>
  );
}
