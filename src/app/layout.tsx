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
        {/* Favicon */}
        <link rel="icon" href="/icon.ico"/>
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
