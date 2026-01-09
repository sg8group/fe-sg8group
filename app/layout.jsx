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
    <html lang="en suppressHydrationWarning"
      suppressHydrationWarning
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
