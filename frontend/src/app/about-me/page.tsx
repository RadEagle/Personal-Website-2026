import { type Metadata } from "next";
import { AboutMe } from "./Components";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "About Jonathan Chau: Software Engineer, formerly at Epic Systems, UCLA M.S. Computer Science. TypeScript, Python, C#, AWS.",
  alternates: { canonical: "/about-me/" },

  openGraph: {
    title: "About Me | Jon's Homepage",
    description:
      "About Jonathan Chau: Software Engineer, formerly at Epic Systems, UCLA M.S. Computer Science. TypeScript, Python, C#, AWS.",
    url: "https://www.jqchau.com/about-me/",

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

const App = () => {
  return <AboutMe />;
};

export default App;
