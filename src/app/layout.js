import Navbar from "@/components/Navbar/Navbar";
import { PrimeReactProvider } from "primereact/api";
import MobileNav from "@/components/Navbar/MobileNav";
import StarParticles from "@/components/StarParticles";
import toast, { Toaster } from "react-hot-toast";
import "./globals.css";
import { geistMono, geistSans, poppins } from "../../fonts/font";
import Footer from "@/components/Footer";
import Script from "next/script";
export const value = {
  appendTo: "self",
};

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Abhishek Yadav",
  // icons: {
  //   icon: '/logo/favicon.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0SLHX7FC01"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0SLHX7FC01');
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.className}  ${geistSans.variable} ${geistMono.variable} antialiased `}
        // ${geistSans.variable} ${geistMono.variable}
      >
        <PrimeReactProvider value={value}>
          <Toaster />
          <Navbar />
          {/* <MobileNav /> */}
          <StarParticles />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
