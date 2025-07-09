import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const components = {
  Navbar: dynamic(() => import("@/components/header/Navbar")),
  Header: dynamic(() => import("@/components/header/Header")),
  Services: dynamic(() => import("@/components/header/Services")),
  Story: dynamic(() => import("@/components/Story")),
  Platform: dynamic(() => import("@/components/Platform")),
  Masters: dynamic(() => import("@/components/Masters")),
  Contact: dynamic(() => import("@/components/Contact")),
  Footer: dynamic(() => import("@/components/Footer")),
};

const { Navbar, Header, Services, Story, Platform, Masters, Contact, Footer } = components;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealNet | منصة الرعاية الصحية",
  description:
    "احجز مواعيدك بسهولة، تواصل مع الأطباء، واطّلع على الوصفات والملاحظات الطبية من أي مكان.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HealNet",
    description: "رعايتك الصحية تبدأ من هنا.",
    url: "https://yourdomain.com",
    siteName: "HealNet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-gray-50 text-gray-800">
        <Suspense fallback={<p className="text-center py-10">...جارٍ التحميل</p>}>
          <Navbar />
          <main>
            <Header />
            <Services />
            <Story />
            <Platform />
            <Masters />
            <Contact />
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
