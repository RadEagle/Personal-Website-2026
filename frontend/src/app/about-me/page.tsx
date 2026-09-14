import { type Metadata } from "next";
import { AboutMe } from "./Components";

export const metadata: Metadata = {
  title: "About Me | Jon's Homepage",
};

const App = () => {
  return <AboutMe />;
};

export default App;
