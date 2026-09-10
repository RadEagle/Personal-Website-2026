import { blob } from "../../Library/styles";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Jon's Homepage",
};

const App = () => {
  return (
    <div className={`${blob} m-2 grid md:grid-cols-2`} id="intro-blob">
      <div className="flex flex-col gap-2 text-white text-start">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text">
          I am a software developer based in Southern California building
          applications that not only help people through daily tasks, ranging
          from tech enthusiasts to nurses.
        </p>
        <p className="text">
          My expertise lies within a TypeScript + React frontend and a Python +
          PostgreSQL backend, while being self-taught on the DevOps sector
          including AWS, CI/CD, Ansible, and Terraform. I am also skilled in C#,
          Go, and Rust, while incorporating Agentic AI IDEs such as Cursor and
          Claude code to accelerate product shipping.
        </p>
        <p className="text">
          I have graduated from UCLA with both a Bachelor's ('22) and Master's
          ('23) in Computer Science, and gained real-world experience in
          professional companies such as Epic Systems, which taught me how to
          manage a large codebase, review other developers' code, and
          collaborate with other teams. Now, I am taking the time to build
          products that not only further explore my interest in quantum
          computing, Agentic AI, and physical sciences, but also assist the
          local community around me.
        </p>
        <p className="text">
          If you're into this kind of stuff too, or if you want to know more
          about me, you can talk to me using one of the following icons below:
        </p>
      </div>
      <div className="flex flex-col" id="img-container">
        <img
          src="/portrait-about.png"
          alt="Jonathan Chau"
          className="block rounded-xl relative my-5 mx-auto md:mr-0 md:my-0 w-9/10 leading-0"
        />
      </div>
    </div>
  );
};

export default App;
