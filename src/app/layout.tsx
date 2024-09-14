import './globals.css';
import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JVS Nightlife',
  description: 'Les stats des afterwork EVA chez JVS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
