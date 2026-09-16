import { type Metadata } from "next";
import { KanjiProject } from "./Components";

export const metadata: Metadata = {
  title: "Kanji Complexity Scanner | Jon's Homepage",
};

const App = () => {
  return <KanjiProject />;
};

export default App;
