import "./globals.css";


export const metadata = {
  title: "PassOP - Your own password manager",
  description: "Password manager",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
