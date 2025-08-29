import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ConditionalLayout from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SDIET Techies - Community Portal",
    template: "%s | SDIET Techies"
  },
  description: "Official community website for Sri Dharmasthala Manjunatheshwara Institute of Engineering and Technology. Connect, learn, and grow with fellow students, faculty, and alumni.",
  keywords: [
    "SDIET", "engineering", "technology", "students", "community", "college", "Karnataka", "education", "alumni", "faculty", "events", "projects"
  ],
  metadataBase: new URL("https://sdiettechies.vercel.app"),
  openGraph: {
    title: "SDIET Techies - Community Portal",
    description: "Connect, learn, and grow with SDIET students, faculty, and alumni.",
  url: "https://sdiettechies.vercel.app",
    siteName: "SDIET Techies",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "SDIET Techies Community Portal"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@sdiettechies",
    title: "SDIET Techies - Community Portal",
    description: "Connect, learn, and grow with SDIET students, faculty, and alumni.",
    images: [
      {
        url: "/public/globe.svg",
        alt: "SDIET Techies Community Portal"
      }
    ]
  },
  alternates: {
    canonical: "/"
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
