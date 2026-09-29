import { type Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { githubUsername, linkedInUsername, myName } from "../library/data";
import { siteUrl } from "../library/site";
import "../index.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: myName,
      jobTitle: "Software Engineer",
      url: `${siteUrl}/`,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UCLA",
      },
      sameAs: [
        `https://www.linkedin.com/in/${linkedInUsername}`,
        `https://github.com/${githubUsername}`,
      ],
    },
    {
      "@type": "WebSite",
      name: "Jon's Homepage",
      url: `${siteUrl}/`,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Jonathan Chau | Software Engineer",
    template: "%s | Jon's Homepage",
  },
  icons: "/favicon.svg",
  description:
    "Software engineer (ex-Epic, UCLA M.S. CS). I build TypeScript, Python, and AWS apps that solve everyday problems.",
  authors: [{ name: "Jonathan Chau" }],

  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },

  openGraph: {
    title: "Jonathan Chau | Software Engineer",
    description:
      "Software engineer (ex-Epic, UCLA M.S. CS). I build TypeScript, Python, and AWS apps that solve everyday problems.",
    url: "https://www.jqchau.com",

    siteName: "Jon's Homepage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 720,
        alt: "Preview image for Jon's Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body id="root">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default App;
