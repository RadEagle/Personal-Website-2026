"use client";
import { blob } from "../../Library/styles";

interface ProjectEntryProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  date: Date;
}

const ProjectEntry = (props: ProjectEntryProps) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  return (
    <a
      href={props.link}
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
      <p className="text-gray-400 italic  mt-auto">
        {props.date.toLocaleDateString("en-US", dateOptions)}
      </p>
    </a>
  );
};

const ProjectsList = () => {
  const kanjiProps: ProjectEntryProps = {
    title: "Kanji Complexity Scanner",
    description:
      "Are Japanese characters really that scary? Use this tool to find out!",
    imgSrc: "/kanji.jpeg",
    imgAlt: "Kanji Project Image",
    link: "/projects/kanji",
    date: new Date("9/10/2026"),
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      <ProjectEntry {...kanjiProps} />
    </div>
  );
};

export { ProjectsList };
