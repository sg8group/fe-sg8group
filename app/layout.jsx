import Footer from "./components/layouts/Footer";
import NavbarWrapper from "./components/layouts/navbar/NavbarWrapper";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

export const metadata = {
  title: "SG 8 Group",
  description:
    "SG8 Group Facility Service, Car Rental, Manpower Supply, Consulting",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"], // semi-bold & bold
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body className="antialiased bg-white relative min-h-screen overflow-x-hidden">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
          <div className="pointer-events-auto">
            <NavbarWrapper />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
