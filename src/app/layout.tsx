import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LEAD UTP – Comunidad Tecnológica Estudiantil",
  description:
    "LEAD UTP es una comunidad estudiantil de la UTP enfocada en el desarrollo profesional en tecnología. Impulsamos a estudiantes a ingresar a big tech mediante mentorías, networking, proyectos y formación práctica. 🚀💡",
  keywords: [
    "LEAD UTP",
    "UTP",
    "comunidad estudiantil UTP",
    "tecnología",
    "big tech",
    "programación",
    "mentorías",
    "universidad tecnológica del perú",
    "estudiantes de tecnología",
    "desarrollo profesional",
  ],
  authors: [{ name: "LEAD UTP" }],
  openGraph: {
    title: "LEAD UTP – Comunidad Tecnológica Estudiantil",
    description:
      "Formamos líderes en tecnología a través de mentorías, networking, proyectos y conexión con la industria.",
    url: "https://lead.com",
    siteName: "LEAD UTP",
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: "/lead.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
