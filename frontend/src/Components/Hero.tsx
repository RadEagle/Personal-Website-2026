import portrait from "../assets/portrait.png";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="@container relative grid section-min-height grid-cols-[1fr_500px] gap-1"
      >
        <div id="hero-portrait" aria-hidden="true" />
        <div>
          <h1>Get started!!!</h1>
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
