
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata = {
  title: "Coffeeroasters subscription site",
  description: "Coffeeroasters subscription site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="modal"></div>
        <div id="root">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
