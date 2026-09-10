"use client";
import { blob } from "../../Library/styles";

interface ProjectEntryProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
}

const ProjectEntry = (props: ProjectEntryProps) => {
  return (
    <a href={props.link}
      className={`${blob} text-white text-start hover:scale-101 duration-200 ease-in-out`}
    >
      <div className="relative">
          {/* Upload a 640x400 image here! */}
          <img
            className="rounded-xl w-full block mx-auto"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
      </div>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

const ProjectsList = () => {
  const kanjiProps: ProjectEntryProps = {
    title: "Kanji Complexity Scanner",
    description:
      "Are Japanese characters really that scary? Use this tool to find out!!",
    imgSrc: "/kanji.jpeg",
    imgAlt: "Kanji Project Image",
    link: "/projects/kanji",
  };

  const kanjiProps2: ProjectEntryProps = {
    title: "Kanji Scanner",
    description:
      "Are Japanese characters really that scary? Use this tool to find out!!",
    imgSrc: "/kanji.jpeg",
    imgAlt: "Kanji Project Image",
    link: "/projects/kanji",
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      <ProjectEntry {...kanjiProps} />
    </div>
  );
};

export { ProjectsList };
