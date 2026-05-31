import type { Metadata } from 'next';
import { Gabarito, Inter } from 'next/font/google';
import './styles/globals.css';

const gabarito = Gabarito({
  weight: ['500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

const inter = Inter({
  weight: ['500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Omnichannel Platform | Connecta',
  description:
    'Connecta empowers businesses with a cutting-edge CPaaS platform, enabling seamless communication across multiple channels including WhatsApp, Line, Telegram, Email, SMS, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
