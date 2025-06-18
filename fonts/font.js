import { Geist, Geist_Mono, Poppins, Raleway } from "next/font/google";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
  variable: "--font-poppins", 
});
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
