"use client";
import { useState } from "react";
import { blob } from "../../../Library/styles";
import { exampleKanji, kanjiAlgorithms, modes } from "./data";

interface TwoElementProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

interface ModeProps {
  selectedMode: string;
  onModeChange: (selectedMode: string) => void;
}

interface ModeDependentProps {
  mode: string;
}

const Title = () => {
  return (
    <div className={blob}>
      <h1 className="text-white text-2xl font-bold">
        Kanji Complexity Scanner
      </h1>
    </div>
  );
};

const TwoElement = (props: TwoElementProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {props.left}
      {props.right}
    </div>
  );
};

const Introduction = () => {
  const kanjiExamples = exampleKanji.map((example) => (
    <span
      key={example}
      className="bg-white/20 rounded-lg px-2 py-1 hover:scale-101 hover:cursor-pointer hover:opacity-70 duration-200 ease-in-out"
    >
      {example}
    </span>
  ));

  return (
    <div className={`${blob} text-start text-white content-start`}>
      <h2 className="text-xl font-bold">Welcome!</h2>
      <p>
        This app will reveal when each kanji is taught depending on its
        resulting color. See the algorithm section for more details.
      </p>
      <p>
        As a gentle introduction, copy, paste, and evaluate the following
        examples:
      </p>
      {/* Turn these into chips maybe? Click to copy essentially */}
      <div className="flex flex-wrap gap-1">{kanjiExamples}</div>
    </div>
  );
};

const Algorithm = ({ mode }: ModeDependentProps) => {
  return (
    <div className={`${blob} text-start text-white content-start`}>
      <h2 className="text-xl font-bold">Algorithm</h2>
      <div className="grid">
        {Object.entries(kanjiAlgorithms).map(([key, value]) => (
          <div
            className={`flex flex-col gap-3 col-start-1 row-start-1 ${mode === key ? "" : "invisible"}`}
          >
            <p>{kanjiAlgorithms[mode].intro}</p>
            <div key={key} className={`flex flex-wrap gap-1`}>
              {value.legend.map((level) => (
                <span
                  key={level.label}
                  className={`bg-white/20 ${level.textClass} border ${level.borderClass} rounded-lg px-2 py-1 font-semibold`}
                >{`${level.label} (${level.complexity})`}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>
        White characters and whitespaces are not kanji, and are excluded from
        calculation.
      </p>
    </div>
  );
};

const Mode = (props: ModeProps) => {
  const modeChips = modes.map((mode) => (
    <button
      key={mode}
      onClick={() => props.onModeChange(mode)}
      className={`bg-white/20 text-sm rounded-lg px-2 py-1 border-2 hover:scale-101 hover:cursor-pointer hover:opacity-70 duration-200 ease-in-out ${props.selectedMode === mode ? "text-teal-400 border-teal-400 font-semibold" : null}`}
    >
      {mode}
    </button>
  ));

  return (
    <div className={`${blob} text-start text-white`}>
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Mode:</h2>
        {modeChips}
      </div>
    </div>
  );
};

const Complexity = ({ mode }: ModeDependentProps) => {
  return (
    <div className={`${blob} text-white text-start`}>
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Complexity:</h2>
      </div>
    </div>
  );
};

const KanjiInput = () => {
  return (
    <div className={`${blob} text-start text-white content-start pt-3`}>
      <h3 className="text-lg font-semibold">Input Kanji Here</h3>
      {/* Implement a max character limit so page doesn't crash */}
      <textarea
        name="jp-text"
        rows={10}
        placeholder="Paste kanji here..."
        className="text-black bg-white/90 rounded-lg text-lg px-2 py-1"
      ></textarea>
    </div>
  );
};

const KanjiResult = ({ mode }: ModeDependentProps) => {
  return (
    <div className={`${blob} text-start text-white content-start pt-3`}>
      <h3 className="text-lg font-semibold">Result</h3>
    </div>
  );
};

const Sources = () => {
  return (
    <div className={`${blob} text-start text-white content-start`}>
      <h2 className="text-xl font-bold">Sources</h2>
      <p>
        Grade Kanji:{" "}
        <a
          href="https://www.kanji-link.com/en/kanji/grade/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400"
        >
          https://www.kanji-link.com/en/kanji/grade/
        </a>
      </p>
      <p>
        JLPT Kanji:{" "}
        <a
          href="https://www.kanshudo.com/collections/jlpt_kanji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400"
        >
          https://www.kanshudo.com/collections/jlpt_kanji
        </a>
      </p>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className={`${blob} text-start text-white content-start`}>
      <h2 className="text-xl font-bold">Feedback</h2>
      <p>
        Please contact{" "}
        <a href="mailto:jonathanqchau@gmail.com" className="text-sky-400">
          jonathanqchau@gmail.com
        </a>{" "}
        for any questions and suggestions.
      </p>
    </div>
  );
};

const KanjiProject = () => {
  const [mode, setMode] = useState("Default");

  function handleModeChange(selectedMode: string) {
    setMode(selectedMode);
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <Title />
      <TwoElement left={<Introduction />} right={<Algorithm mode={mode} />} />
      <TwoElement
        left={<Mode selectedMode={mode} onModeChange={handleModeChange} />}
        right={<Complexity mode={mode} />}
      />
      <TwoElement left={<KanjiInput />} right={<KanjiResult mode={mode} />} />
      <TwoElement left={<Sources />} right={<Feedback />} />
    </div>
  );
};

export { KanjiProject };
