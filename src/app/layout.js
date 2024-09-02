import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kristine Rivera",
  description: "Online Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-t from-orange-100 from-0% via-amber-50 from-30% to-sky-200 to-100%">
          <div className="h-24">
            <Navbar />
          </div>

          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
