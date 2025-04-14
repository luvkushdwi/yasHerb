// import './globals.css';
// import Footer from '@/components/footer';
// import Header from '@/components/Header';
// import AboutUs from '@/components/AboutUs';
// import Products from '@/components/products';
// import Home from '@/components/home';


// export const metadata = {
//   title: 'YasHerb',
//   description: 'Nature\'s Finest Remedies',
//   icons: {
//     icon: "/new_logo.png"
//   },
// };

// export default function RootLayout({
//   // children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow pt-24">
//           {/* Add AboutUs and Products pages */}
//           <Home/>
//           <AboutUs />
//           <Products />
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/products';
import Home from '@/components/home';

export default function RootLayout({
  // children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>YasHerb</title>
        <meta name="description" content="Nature's Finest Remedies" />

        {/* Favicon */}
        <link rel="icon" href="/new_logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/new_logo.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph / SEO */}
        <meta property="og:title" content="YasHerb" />
        <meta property="og:description" content="Nature's Finest Remedies" />
        <meta property="og:image" content="/new_logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yasherb.com" />

        {/* Optional Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YasHerb" />
        <meta name="twitter:description" content="Nature's Finest Remedies" />
        <meta name="twitter:image" content="/new_logo.png" />
      </head>

      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Home />
          <AboutUs />
          <Products />
        </main>
        <Footer />
      </body>
    </html>
  );
}
