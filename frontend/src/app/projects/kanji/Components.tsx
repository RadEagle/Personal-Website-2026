"use client";
import { useState, useRef, useEffect } from "react";
import { blob } from "../../../Library/styles";
import {
  exampleKanji,
  kanjiAlgorithms,
  maxInputLength,
  sources,
  type LegendItem,
} from "./data";
import { email } from "../../../Library/data";
import {
  calculateComplexity,
  paintOutput,
  type PaintedOutput,
} from "./helpers";

// #region interfaces
interface TwoElementProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

interface ModeDependentProps {
  mode: string;
}

interface ModeProps extends ModeDependentProps {
  onModeChange: (selectedMode: string) => void;
}

interface ScorerProps extends ModeDependentProps {
  inputText: string;
}

interface InputProps {
  onInputChange: (input: string) => void;
}

interface SourceLinkProps {
  label: string;
  link: string;
}

// #endregion

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
    <div className="grid md:grid-cols-2 gap-2 text-sm">
      {props.left}
      {props.right}
    </div>
  );
};

const Introduction = () => {
  const [showCopied, setShowCopied] = useState("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopyKanji(example: string) {
    try {
      setShowCopied("idle");
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      await navigator.clipboard.writeText(example);
      setShowCopied("in");
      timeout.current = setTimeout(() => setShowCopied("out"), 2000);
    } catch (e) {}
  }

  const kanjiExamples = exampleKanji.map((example) => (
    <button
      key={example}
      className="bg-white/20 rounded-lg px-2 py-1 hover:scale-101 hover:cursor-pointer hover:opacity-70 duration-200 ease-in-out"
      onClick={() => {
        handleCopyKanji(example);
      }}
    >
      {example}
    </button>
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
      <div className="flex flex-wrap gap-1">{kanjiExamples}</div>
      <div
        aria-live="polite"
        className={`text-xs bg-green-400 rounded-lg p-3 text-center border-green-700 border-2 font-semibold fixed z-10 bottom-2 left-15 ${showCopied === "in" ? "animate-toast-fade-in" : showCopied === "out" ? "animate-toast-fade-out" : "hidden"}`}
      >
        Text copied!
      </div>
    </div>
  );
};

const Algorithm = ({ mode }: ModeDependentProps) => {
  return (
    <div className={`${blob} text-start text-white content-start`}>
      <h2 className="text-xl font-bold">Algorithm</h2>
      <div>
        <p>
          <span className="font-semibold">Short inputs</span> - Average the
          character complexities.
        </p>
        <p>
          <span className="font-semibold">Long inputs</span> - Take highest
          complexity that is frequent and substantial.
        </p>
      </div>
      <div className="grid">
        {Object.entries(kanjiAlgorithms).map(([key, value]) => (
          <div
            key={key}
            className={`flex flex-col gap-3 col-start-1 row-start-1 ${mode === key ? "" : "invisible"}`}
          >
            <p>{value.intro}</p>
            <div className={`flex flex-wrap gap-1`}>
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
  const modeChips = Object.keys(kanjiAlgorithms).map((mode) => (
    <button
      key={mode}
      onClick={() => props.onModeChange(mode)}
      className={`bg-white/20 text-xs md:text-sm rounded-lg px-2 py-1 border-2 hover:scale-101 hover:cursor-pointer hover:opacity-70 duration-200 ease-in-out ${props.mode === mode ? "text-teal-400 border-teal-400 font-semibold" : null}`}
    >
      {mode}
    </button>
  ));

  return (
    <div className={`${blob} text-start text-white`}>
      <div className="flex justify-between lg:justify-start lg:gap-2 items-center">
        <h2 className="text-base md:text-xl font-semibold">Mode:</h2>
        {modeChips}
      </div>
    </div>
  );
};

const Complexity = (props: ScorerProps) => {
  const [algEntry, setAlgEntry] = useState<LegendItem | undefined>(undefined);

  useEffect(() => {
    const calcScore = calculateComplexity(props.inputText, props.mode);
    setAlgEntry(
      calcScore > 0
        ? kanjiAlgorithms[props.mode].legend[calcScore - 1]
        : undefined,
    );
  }, [props.inputText, props.mode]);

  return (
    <div className={`${blob} text-white text-start`}>
      <div className="flex gap-2 items-center text-md font-semibold">
        <h2 className="text-xl">Complexity:</h2>
        {props.inputText ? (
          algEntry ? (
            <span
              className={`bg-white/20 ${algEntry.textClass} border-2 ${algEntry.borderClass} rounded-lg px-2 py-1 font-semibold`}
            >
              {algEntry.label}
            </span>
          ) : (
            <span
              className={`bg-white/20 text-white border-2 border-white rounded-lg px-2 py-1 font-semibold`}
            >
              Not Japanese
            </span>
          )
        ) : null}
      </div>
    </div>
  );
};

const KanjiInput = (props: InputProps) => {
  const [kanjiInput, setKanjiInput] = useState("");

  function handleInputChange(input: string) {
    setKanjiInput(input);
    props.onInputChange(input);
  }

  return (
    <div className={`${blob} text-start text-white content-start pt-3`}>
      <h3 className="text-lg font-semibold">Input Kanji Here</h3>
      <textarea
        name="kanjiInput"
        value={kanjiInput}
        onChange={(e) => handleInputChange(e.target.value)}
        rows={10}
        maxLength={maxInputLength}
        placeholder="Paste kanji here..."
        aria-label="Kanji Input"
        aria-describedby="kanjiInputCounter"
        autoComplete="off"
        className="text-black bg-white/90 rounded-lg text-lg px-2 py-1"
      ></textarea>
      <p id="kanjiInputCounter" className="text-xs/1 text-end">
        {kanjiInput.length}/{maxInputLength}
      </p>
    </div>
  );
};

const KanjiResult = (props: ScorerProps) => {
  const [colorMap, setColorMap] = useState<PaintedOutput[]>([]);

  useEffect(() => {
    setColorMap(paintOutput(props.inputText, props.mode));
  }, [props.inputText, props.mode]);

  return (
    <div className={`${blob} text-start text-white content-start pt-3`}>
      <h3 className="text-lg font-semibold">Result</h3>
      <div
        aria-label="Kanji Result"
        className="bg-white/10 rounded-lg text-lg px-2 py-1 overflow-y-auto whitespace-pre-wrap h-72"
      >
        {colorMap.map(({ character, textClass }, index) => (
          <span key={index} className={textClass}>
            {character}
          </span>
        ))}
      </div>
    </div>
  );
};

const SourceLink = (props: SourceLinkProps) => {
  return (
    <p>
      {props.label}:{" "}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-400"
      >
        {props.link}
      </a>
    </p>
  );
};

const Sources = () => {
  return (
    <div className={`${blob} text-white text-start content-start`}>
      <h2 className="text-xl font-bold">Sources</h2>
      <div>
        {sources.map((source) => (
          <SourceLink
            key={source.label}
            label={source.label}
            link={source.link}
          />
        ))}
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className={`${blob} text-white text-start content-start`}>
      <h2 className="text-xl font-bold">Feedback</h2>
      <p>
        Please contact{" "}
        <a href={`mailto:${email}`} className="text-sky-400">
          {email}
        </a>{" "}
        for any questions and suggestions.
      </p>
    </div>
  );
};

const KanjiProject = () => {
  const [mode, setMode] = useState(Object.keys(kanjiAlgorithms)[0]);
  const [inputText, setInputText] = useState("");

  function handleModeChange(selectedMode: string) {
    setMode(selectedMode);
  }

  function handleInputChange(input: string) {
    setInputText(input);
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <Title />
      <TwoElement left={<Introduction />} right={<Algorithm mode={mode} />} />
      <TwoElement
        left={<Mode mode={mode} onModeChange={handleModeChange} />}
        right={<Complexity mode={mode} inputText={inputText} />}
      />
      <TwoElement
        left={<KanjiInput onInputChange={handleInputChange} />}
        right={<KanjiResult mode={mode} inputText={inputText} />}
      />
      <TwoElement left={<Sources />} right={<Feedback />} />
    </div>
  );
};

export { KanjiProject };
