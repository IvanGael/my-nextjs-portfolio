import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Portfolio - Ivan APEDO',
  description: "Portfolio de Ivan APEDO, Développeur d'applications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/pss.png"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
