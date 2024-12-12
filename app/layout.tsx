import "./globals.css";
import NavBar from "./components/NavBar";
import localFont from "next/font/local";
import Footer from "./components/footer";

const notio = localFont({
  src: [
    {
      path: "./fonts/NotoSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/NotoSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-notio",
});

export const metadata = {
  title: "Dubai Pool Company Website",
  description:
    "We are your friendly Dubai Pool Company. Offering services from design and construction to maintenance and safety.",
  metadataBase: new URL("https://poolsdubai.com"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${notio.className}`}>
      <script
        async
        defer
        src='https://widget.getyourguide.com/dist/pa.umd.production.min.js'
        data-gyg-partner-id='3J2Q5H3'></script>

      <body className='min-h-screen flex flex-col'>
        <header className='sticky top-0 z-50'>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
