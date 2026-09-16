import { blob } from "../../Library/styles";
import { type Metadata } from "next"
import { ProjectsList, OtherProjectsList } from "./Components";

export const metadata: Metadata = {
  title: "Projects | Jon's Homepage"
}

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
