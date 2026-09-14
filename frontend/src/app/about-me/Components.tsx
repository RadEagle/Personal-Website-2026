import { blob } from "../../Library/styles";
import { identity, proof, story, skills, exploring, interests } from "./data";

interface CapabilityProps {
  title: string;
  capabilities: string[];
}

const Introduction = () => {
  return (
    <div className={`${blob} grid md:grid-cols-[1fr_auto]`} id="intro-blob">
      <div className="flex flex-col gap-2 text-white text-start">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="font-semibold">{identity}</p>
        <p>{proof}</p>
        <p className="text-gray-200 text-sm">{story}</p>
      </div>
      <div className="flex flex-col" id="img-container">
        <img
          src="/portrait-about.png"
          alt="Jonathan Chau"
          className="block rounded-xl relative my-5 mx-auto md:m-0 w-full md:max-w-xs leading-0"
        />
      </div>
    </div>
  );
};

const Capability = (props: CapabilityProps) => {
  const capabilities = props.capabilities.map((capability) => (
    <span className="bg-white/20 rounded-lg px-2 py-1" key={capability}>
      {capability}
    </span>
  ));

  return (
    <div className={`${blob} text-start content-start`}>
      <h2 className="text-xl text-white font-semibold">{props.title}</h2>
      <div className="text-gray-200 flex flex-wrap gap-1">{capabilities}</div>
    </div>
  );
};

const CapabilitiesList = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      <Capability title="Skills" capabilities={skills} />
      <Capability title="Currently Exploring" capabilities={exploring} />
      <Capability title="Interests" capabilities={interests} />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="m-2 grid content-start gap-3">
      <Introduction />
      <CapabilitiesList />
    </div>
  );
};

export { AboutMe };
