import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import MotionProvider from "@/components/webinar/MotionProvider";
import { SITE_URL } from "@/components/webinar/content";

const serif = Playfair_Display({
  variable: "--font-wb-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-wb-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "Free Live Webinar | Build Your Online Income";
const description =
  "Join our free live webinar and learn practical strategies for building a digital product business and creating a simple online income strategy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/webinar" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/webinar",
    // TODO: replace with a dedicated 1200x630 webinar share graphic.
    images: [{ url: "/image.jpeg", alt: "Free live webinar with Anisha" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function WebinarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      id="top"
      className={`${serif.variable} ${sans.variable} min-h-screen bg-wb-bg font-(family-name:--font-wb-sans) text-wb-ink`}
    >
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
