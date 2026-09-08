import portrait from "../assets/portrait.png";
import kanji from "../assets/kanji.jpeg";
import { blob } from "../Library/styles.ts";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="@container relative grid section-min-height md:grid-cols-[1fr_500px] gap-1"
      >
        <div
          id="hero-portrait"
          aria-hidden="true"
          className="flex justify-center"
        >
          <img
            src={portrait}
            alt="Developer Portrait"
            className="block md:hidden"
          />
        </div>
        <div
          id="hero-blobs"
          className="grid grid-rows-[auto_auto] gap-2 text-left content-start m-2"
        >
          <div className={`${blob}`} id="intro-blob">
            <p id="intro-id" className="text-white text-xl">
              I'm Jonathan Chau
            </p>
            <h2 className="text-white text-2xl font-bold">
              I build websites and applications that solve everyday problems and
              saves lives.
            </h2>
            <div id="intro-blob-buttons" className="flex justify-around gap-2">
              <a
                type="button"
                href="about-me"
                className="bg-gray-300 border-2 border-black text-black text-center font-bold rounded-md leading-7.5 w-full hover:scale-102 duration-200 ease-in-out"
              >
                About Me
              </a>
              <a
                type="button"
                href="mailto:jonathanqchau@gmail.com"
                className="bg-orange-400 border-2 border-black text-white text-center font-bold rounded-md leading-7.5 w-full hover:scale-102 duration-200 ease-in-out"
              >
                Contact Me
              </a>
            </div>
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
                Is kanji still really scary?
              </div>
            </div>
          </div>
        </div>
        <img
          src={portrait}
          alt="Developer Portrait"
          className="absolute bottom-0 left-0 -z-1 h-full w-auto max-w-none translate-x-[max(-80px,calc((100cqi-500px-0.25rem)/2-50%))] animate-fade-in hidden md:block"
        />
      </section>
    </>
  );
};

export { Hero };
