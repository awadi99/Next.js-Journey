import "./globals.css";
import Nav from "@/Components/Nav";
import { Poppins } from "next/font/google";

const Pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export const metadata = {
  title: {
    default: "My Portfolio | Full Stack Developer",
    template: "%s | My Portfolio",
  },

  description:
    "Welcome to my personal portfolio website. I am a Full Stack Developer skilled in MERN Stack, React, Next.js, and modern web technologies.",

  keywords: [
    "Portfolio",
    "Web Developer",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [
    { name: "Aditya Waghmare "}
  ],

  creator: "Aditya Waghmare",

  metadataBase: new URL("https://your-website-url.com"),

  openGraph: {
    title: "My Portfolio | Full Stack Developer",
    description:
      "Personal portfolio showcasing my skills, projects, and experience in web development.",
    url: "https://your-website-url.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "My Portfolio | Full Stack Developer",
    description:
      "Welcome to my personal portfolio website made using Next.js.",
    images: ["/og-image.png"],
  },

  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Pop.className}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
