import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SideDrawer from "./components/sideDrawer/sideDrawer";
import RouteChangeSpinner from "./components/RouteChangeSpinner/routeChangeSpinner";
config.autoAddCss = false;

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Boxdelabonita",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        <RouteChangeSpinner />
        <Topbar />
        <SideDrawer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
