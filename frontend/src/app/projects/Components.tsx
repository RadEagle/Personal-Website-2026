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

interface OtherProjectEntryProps {
  title: string;
  organization: string;
  tools: string[];
  startDate: Date;
  endDate: Date;
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

const OtherProjectEntry = (props: OtherProjectEntryProps) => {
  const tools = props.tools.map((tool) => (
    <span key={tool} className="bg-white/20 rounded-lg px-2 py-1">
      {tool}
    </span>
  ));

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  const startDate = props.startDate.toLocaleDateString("en-US", dateOptions);

  let endDate;
  endDate = props.endDate.toLocaleDateString("en-US", dateOptions);

  let dateRange;
  dateRange = `${startDate} - ${endDate}`;

  return (
    <div
      className={`${blob} grid-cols-[2fr_1fr_3fr_1fr] text-white justify-items-start items-start text-sm`}
    >
      <div className="font-semibold">{props.title}</div>
      <div>{props.organization}</div>
      <div className="flex flex-wrap gap-1">{tools}</div>
      <div>{dateRange}</div>
    </div>
  );
};

const OtherProjectsList = () => {
  const projectProps: OtherProjectEntryProps = {
    title: "Flightboard Consents Viewer",
    organization: "Epic Systems",
    tools: ["TypeScript", "React", "SCSS", "C#", "M"],
    startDate: new Date("11/8/2023"),
    endDate: new Date("7/17/2024"),
  };

  return (
    <div className="flex flex-col gap-y-2">
      <OtherProjectEntry {...projectProps} />
      <OtherProjectEntry {...projectProps} />
    </div>
  );
};

export { ProjectsList, OtherProjectsList };
