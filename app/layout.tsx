import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'RevUp Media | Ecommerce Email Marketing', description: 'Email strategy, automation and campaign creative for ecommerce brands.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
