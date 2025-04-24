import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/products';
import Home from '@/components/home';
import { Inter } from 'next/font/google';
import Contact from '@/components/contact';


export const metadata = {
  title: 'YasHerb',
  description: 'Nature\'s Finest Remedies',
  icons: {
    icon: "/new_logo.png"
  },
};

const inter = Inter({ subsets: ['latin'] , variable: '--font-inter'});

export default function RootLayout({
  // children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen font-sans ${inter.variable} bg-gray-50 text-black-700`}>
        <Header />
        <main className="flex-grow pt-24">
          {/* Add AboutUs and Products pages */}
          <Home/>
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

