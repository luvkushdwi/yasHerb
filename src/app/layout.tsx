import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/products';
import Home from '@/components/home';
import { Inter } from 'next/font/google';
import Contact from '@/components/contact';

// More descriptive and SEO-friendly metadata
export const metadata = {
  title: 'YasHerb - 100% Natural Herbs, Spices & Beauty Products',
  description: "YasHerb offers premium natural herb and spice powders, along with organic beauty products for hair and skin care. Discover our handcrafted, pure, and sustainable collection.",
  keywords: "YasHerb, natural herbs, spice powders, organic skincare, natural beauty products, herbal remedies",
  openGraph: {
    title: 'YasHerb - 100% Natural Herbs, Spices & Beauty Products',
    description: "YasHerb offers premium natural herb and spice powders, along with organic beauty products for hair and skin care. Discover our handcrafted, pure, and sustainable collection.",
    images: ['/yasherb-og-image.jpg'],
    url: 'https://yasherb.com', // Replace with your actual domain
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest', // Create this file in your public folder
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yasherb.com', // Replace with your actual domain
  },
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  // children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yasherb.com" /> 
        <meta name="author" content="YasHerb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`flex flex-col min-h-screen font-sans ${inter.variable} bg-gray-50 text-black-700`}>
        <Header />
        <main className="flex-grow pt-24">
          <Home />
          <AboutUs />
          <Products />
          <Contact />
          {/* <Blog /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}