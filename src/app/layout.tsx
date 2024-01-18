import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface Props extends React.PropsWithChildren {}

export default function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='px-4 py-8'>{props.children}</main>
        <Toaster />
      </body>
    </html>
  );
}
