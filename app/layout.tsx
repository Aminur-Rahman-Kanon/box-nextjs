import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SideDrawer from "./components/sideDrawer/sideDrawer";
import RouteChangeSpinner from "./components/RouteChangeSpinner/routeChangeSpinner";
import { ToastContainer } from 'react-toastify';
config.autoAddCss = false;

const rubik = Lora({ subsets: ['latin'] })

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
        <ToastContainer />
        <RouteChangeSpinner />
        <Topbar />
        <SideDrawer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
