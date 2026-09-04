import portrait from "../assets/portrait.png";
import kanji from "../assets/kanji.jpeg";
import { blob } from "../Library/styles.ts";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="@container relative grid section-min-height grid-cols-[1fr_500px] gap-1"
      >
        <div id="hero-portrait" aria-hidden="true" />
        <div
          id="hero-blobs"
          className="grid grid-rows-[auto_auto] gap-2 text-left content-start m-2"
        >
          <div className={`${blob}`} id="intro-blob">
            <h1 className="text-white text-3xl font-bold">Hi there!</h1>
            <p id="about-me" className="text-white">
              My name is Jonathan Chau and I am a software developer who has
              devoted time to write programs to help people solve everyday
              problems as well as saving lives. If you have a problem that you
              would like to reach out to me to, you can{" "}
              <a
                id="email"
                href="mailto:jonathanqchau@gmail.com"
                className="text-sky-400 hover:opacity-60 duration-200 ease-in-out"
              >
                email me here
              </a>
              .
            </p>
            <a
              href="about-me"
              className="text-sky-400 hover:opacity-60 duration-200 ease-in-out"
            >
              Learn more about me!
            </a>
          </div>
          <div className={`${blob}`} id="project-blob">
            <h2 className="text-white text-xl font-bold">
              Check out my Project!
            </h2>
            <div
              id="proj-container"
              className="relative text-center duration-200 ease-in-out hover:scale-102"
            >
              <a href="kanji">
                {/* Upload a 640x400 image here! */}
                <img
                  id="proj-img"
                  className="rounded-xl w-full block mx-auto"
                  src={kanji}
                  alt="Project Image"
                />
              </a>
              <div
                id="proj-caption"
                className="bg-[rgb(0,0,0,0.65)] text-white text-md rounded-b-xl h-7.5 w-full leading-7.5 absolute bottom-0 inset-x-0 mx-auto z-2"
              >
                Is kanji really scary?
              </div>
            </div>
          </div>
        </div>
        <img
          src={portrait}
          alt="Developer Portrait"
          className="absolute bottom-0 left-0 -z-1 h-full w-auto max-w-none
                    translate-x-[max(-80px,calc((100cqi-500px-0.25rem)/2-50%))]"
        />
      </section>
    </>
  );
}

export { Hero };
