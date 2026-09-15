"use client";
import { blob } from "../../Library/styles";
import projectsList from "./projectsList.json";
import otherProjectsList from "./otherProjectsList.json";

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
  endDate?: Date | null;
}

function formatDateString(startDate: Date, endDate?: Date | null): string {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const monthOnly: Intl.DateTimeFormatOptions = {
    month: "short",
  };

  // start should only lose the year if the end date is a different month of the same year
  let start;
  if (
    endDate &&
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() != endDate.getMonth()
  ) {
    start = startDate.toLocaleDateString("en-US", monthOnly);
  } else {
    start = startDate.toLocaleDateString("en-US", dateOptions);
  }

  const end = endDate
    ? endDate.toLocaleDateString("en-US", dateOptions)
    : "Present";

  return start === end ? start : `${start} - ${end}`;
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
      <p className="text-gray-400 italic mt-auto">
        {props.date.toLocaleDateString("en-US", dateOptions)}
      </p>
    </a>
  );
};

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      {Object.entries(projectsList).map(([id, props]) => (
        <ProjectEntry key={id} {...props} date={new Date(props.date)} />
      ))}
    </div>
  );
};

const OtherProjectEntry = (props: OtherProjectEntryProps) => {
  const tools = props.tools.map((tool) => (
    <span key={tool} className="bg-white/20 rounded-lg px-2 py-1">
      {tool}
    </span>
  ));

  const dateString = formatDateString(props.startDate, props.endDate);

  return (
    <div
      className={`${blob} grid-cols-[2fr_1fr_3fr_1.1fr] text-white justify-items-start items-start text-sm`}
    >
      <div className="font-semibold">{props.title}</div>
      <div>{props.organization}</div>
      <div className="flex flex-wrap gap-1">{tools}</div>
      <div className="text-gray-300 italic justify-self-end">{dateString}</div>
    </div>
  );
};

const OtherProjectsList = () => {
  const sortedOtherProjects = Object.entries(otherProjectsList).sort(
    ([_a, a_props], [_b, b_props]) => {
      const aStart = new Date(a_props.startDate).getTime();
      const aEnd = a_props.endDate
        ? new Date(a_props.endDate).getTime()
        : Infinity;
      const bStart = new Date(b_props.startDate).getTime();
      const bEnd = b_props.endDate
        ? new Date(b_props.endDate).getTime()
        : Infinity;

      const startDiff = bStart - aStart;
      const endDiff = bEnd - aEnd;
      return endDiff || startDiff;
    },
  );
  return (
    <div className="flex flex-col gap-y-2">
      {sortedOtherProjects.map(([id, props]) => (
        <OtherProjectEntry
          key={id}
          {...props}
          startDate={new Date(props.startDate)}
          endDate={props.endDate ? new Date(props.endDate) : null}
        />
      ))}
    </div>
  );
};

export { ProjectsList, OtherProjectsList };
