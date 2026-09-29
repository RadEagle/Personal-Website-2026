import { blob } from "../../library-temp/styles";
import { type Metadata } from "next";
import { ProjectsList, OtherProjectsList } from "./Components";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects made by Jonathan Chau, including a Kanji Complexity Scanner and more to come!",
  alternates: { canonical: "/projects/" },

  openGraph: {
    title: "Projects | Jon's Homepage",
    description:
      "Projects made by Jonathan Chau, including a Kanji Complexity Scanner and more to come!",
    url: "https://www.jqchau.com/projects/",

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
  return (
    <div id="projects-main" className="m-2 grid content-start gap-3">
      <div className={blob}>
        <h1 className="text-white text-2xl">Jon's Interactive Projects</h1>
      </div>
      <ProjectsList />
      <div className={blob}>
        <h1 className="text-white text-2xl">Other Past Projects</h1>
      </div>
      <OtherProjectsList />
    </div>
  );
};

export default App;
