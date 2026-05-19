import type { Metadata } from "next";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// System fonts for reliability
const inter = { variable: "--font-sans" };
const jetbrains = { variable: "--font-mono" };

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://vikaspoute.github.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Vikas Poute | Senior Software Engineer & Real-Time Systems Architect",
    template: "%s | Vikas Poute",
  },
  description:
    "Explore the portfolio of Vikas Poute, a Senior Software Engineer specializing in real-time communication systems, scalable Flutter architectures, high-performance WebRTC, and low-latency Java Spring Boot backends.",
  keywords: [
    "Vikas Poute",
    "Senior Software Engineer",
    "Flutter Architect",
    "WebRTC Engineer",
    "Real-Time Systems Architect",
    "Low-Latency Systems",
    "Java Developer",
    "Spring Boot Expert",
    "Socket.IO Development",
    "High-Performance Computing",
    "Distributed Systems Architect",
    "Full Stack Engineer",
    "WebRTC audio video streaming",
    "low latency video streaming Flutter",
    "Flutter BLoC architecture design",
    "high concurrency Socket.IO chat",
    "Java Spring Boot performance tuning",
    "AWS database scaling MySQL RDS",
    "spatial audio WebRTC development",
    "hire remote Flutter developer",
    "remote WebRTC architect",
    "full stack system designer",
    "real-time systems developer",
    "Flutter audio streaming developer",
    "Spring Boot REST API development",
    "AWS Cognito authentication setup",
    "cross platform app architect",
    "Vikas Poute portfolio",
    "Vikas Poute software engineer",
  ],
  authors: [{ name: "Vikas Poute", url: "https://vikaspoute.github.io" }],
  creator: "Vikas Poute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikaspoute.github.io",
    title: "Vikas Poute | Senior Software Engineer & Real-Time Systems Architect",
    description:
      "Architecting high-performance real-time communication systems, WebRTC integrations, and scalable cross-platform Flutter ecosystems.",
    siteName: "Vikas Poute Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Poute | Senior Software Engineer & Real-Time Systems Architect",
    description:
      "Building production-grade, low-latency real-time systems and scalable Flutter architectures.",
    creator: "@vikaspoute",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5kAwvNEBlKladIEp-vnwzzQyyz8urL8fZoqFH6kDnZc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikas Poute",
    jobTitle: "Senior Software Engineer & Architect",
    url: "https://vikaspoute.github.io",
    sameAs: [
      "https://github.com/vikaspoute",
      "https://linkedin.com/in/vikaspoute",
    ],
    description:
      "Senior Software Engineer specializing in high-concurrency real-time communication systems, low-latency backends, WebRTC, and enterprise Flutter architectures.",
    knowsAbout: [
      "Flutter",
      "Java",
      "Spring Boot",
      "WebRTC",
      "Real-Time Systems",
      "Distributed Systems",
      "Socket.IO",
      "System Design",
      "Mobile App Development",
      "Low Latency Backend",
      "WebRTC audio video streaming",
      "Flutter BLoC architecture",
      "Database scaling & MySQL RDS",
      "AWS cloud deployment",
      "High concurrency state synchronization",
      "Secure authentication & AWS Cognito",
      "Razorpay payment gateway integration",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          jetbrains.variable,
          "font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
