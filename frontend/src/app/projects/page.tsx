import { blob } from "../../Library/styles";
import { ProjectsList } from "./Components";

const App = () => {
  return (
    <div id="projects-main" className="m-2 grid content-start gap-3">
      <div className={blob}>
        <h1 className="text-white text-2xl">Jon's Interactive Projects</h1>
      </div>
      <ProjectsList />
    </div>
  );
};

export default App;
