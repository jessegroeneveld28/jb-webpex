import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jbwebpex.com"),
  title: {
    default: "JB WebPex | Betaalbare Websites voor de Horeca",
    template: "%s | JB WebPex",
  },
  description:
    "JB WebPex bouwt snelle, professionele en mobielvriendelijke websites voor horecazaken. Verhoog je online zichtbaarheid en krijg meer gasten over de vloer.",
  keywords: [
    "Horeca website laten maken",
    "Webdesign horeca",
    "Website restaurant",
    "JB WebPex",
    "Webdesign West-Friesland",
  ],
  openGraph: {
    title: "JB WebPex | Betaalbare Websites voor de Horeca",
    description:
      "Snelle en professionele websites voor restaurants, cafés en horecazaken.",
    url: "https://jbwebpex.com",
    siteName: "JB WebPex",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  }, 
 verification: {
    google: "tsFVSo9FVvWThkW7r3wel4Qt6Jx0HMUrYdfm1F4zoGs",
  },
};




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${plusJakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-espresso text-cream font-body">
        {children}
      </body>
    </html>
  );
}
