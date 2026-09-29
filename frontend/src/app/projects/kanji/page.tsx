import { type Metadata } from "next";
import { KanjiProject } from "./Components";

export const metadata: Metadata = {
  title: "Kanji Complexity Scanner",
  description:
    "Paste Japanese text to score kanji by Joyo grade, JLPT level, and WaniKani. Free tool by Jonathan Chau.",
  alternates: { canonical: "/projects/kanji/" },

  openGraph: {
    title: "Kanji Complexity Scanner | Jon's Homepage",
    description:
      "Paste Japanese text to score kanji by Joyo grade, JLPT level, and WaniKani. Free tool by Jonathan Chau.",
    url: "https://www.jqchau.com/projects/kanji/",

    siteName: "Jon's Homepage",
    images: [
      {
        url: "/og-kanji.jpg",
        width: 1280,
        height: 720,
        alt: "Preview image for the Kanji Complexity Scanner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  other: {
    google: "notranslate",
  },
};

const App = () => {
  return <KanjiProject />;
};

export default App;
