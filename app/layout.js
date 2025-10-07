import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PassOP - Your own password manager",
  description: "Password manager",
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload"></Script>
      </body>
    </html>
  );
}
