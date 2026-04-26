import { Raleway, Montserrat } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Define CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
