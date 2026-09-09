import {
  email,
  githubUsername,
  linkedInUsername,
  resumeLink,
} from "../Library/data";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/resume.png";
import linkedinIcon from "../assets/linkedin.png";

interface FooterButtonProps {
  href: string;
  imgIcon?: string;
  svgIcon?: string;
  openNewTab?: boolean;
  label: string;
}

const FooterButton = (props: FooterButtonProps) => {
  return (
    <li>
      <a href={props.href} target={props.openNewTab ? "_blank" : "undefined"}>
        {props.imgIcon ? (
          <img className="logo" src={props.imgIcon} alt="" />
        ) : null}
        {props.svgIcon ? (
          <svg className="button-icon" role="presentation" aria-hidden="true">
            <use href={props.svgIcon}></use>
          </svg>
        ) : null}
        {props.label}
      </a>
    </li>
  );
};

const LeftFooter = () => {
  return (
    <div id="docs">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2>Other Projects</h2>
      <p>Access my previous work here:</p>
      <ul>
        <FooterButton
          href="projects"
          label="Coming soon! View past work here."
        />
      </ul>
    </div>
  );
};

const RightFooter = () => {
  return (
    <div id="social">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with me</h2>
      <p>Using any of the following below:</p>
      <ul>
        <FooterButton
          href={`mailto:${email}`}
          label="Email"
          imgIcon={emailIcon}
        />
        <FooterButton
          href={resumeLink}
          label="Resume"
          imgIcon={resumeIcon}
          openNewTab={true}
        />
        <FooterButton
          href={`https://www.linkedin.com/in/${linkedInUsername}`}
          label="LinkedIn"
          imgIcon={linkedinIcon}
          openNewTab={true}
        />
        <FooterButton
          href={`https://github.com/${githubUsername}`}
          label="GitHub"
          svgIcon="/icons.svg#github-icon"
          openNewTab={true}
        />
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <section id="next-steps">
      <LeftFooter />
      <RightFooter />
    </section>
  );
};

export { Footer };
