import { Poppins, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
