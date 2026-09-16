import { blob } from "../../../Library/styles";

const App = () => {
  return (
    <div className="m-2 flex flex-col gap-2">
      <div className={blob}>
        <h1 className="text-white text-2xl font-bold">
          Kanji Complexity Scanner
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
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
          <ul className="grid gap-1 justify-between list-disc list-inside">
            <li>孫悟空</li>
            <li>ジョジョの奇妙な冒険</li>
            <li>四宮かぐや</li>
            <li>千本桜</li>
            <li>神風</li>
            <li>麒麟</li>
            <li>狐</li>
            <li>胡桃</li>
            <li>東京</li>
          </ul>
        </div>
        <div className={`${blob} text-start text-white content-start`}>
          <h2 className="text-xl font-bold">Algorithm</h2>
          <div className="alg" id="jlpt">
            <p>
              The scoring is based on the level each kanji appears in the
              Japanese Language Proficiency Test (JLPT). The complexity number
              is shown inside the parentheses.
            </p>
            <ul className="tutorial-table" id="grade-levels">
              <li className="text-cyan-300">JLPT 5 (1)</li>
              <li className="text-lime-300">JLPT 4 (2)</li>
              <li className="text-amber-300">JLPT 3 (3)</li>
              <li className="text-orange-300">JLPT 2 (4)</li>
              <li className="text-red-300">JLPT 1 (5)</li>
              <li className="kanji-9">Hyogai Kanji (6)</li>
            </ul>
          </div>
          <div className="alg" id="grade">
            <p>
              The scoring is based on the grade level each kanji is taught in
              Japan. The complexity number is shown inside the parentheses.
            </p>
            <ul className="tutorial-table" id="grade-levels">
              <li className="kanji-1">1st Grade (1)</li>
              <li className="kanji-2">2nd Grade (2)</li>
              <li className="kanji-3">3rd Grade (3)</li>
              <li className="kanji-4">4th Grade (4)</li>
              <li className="kanji-5">5th Grade (5)</li>
              <li className="kanji-6">6th Grade (6)</li>
              <li className="kanji-7">Junior High (7)</li>
              <li className="kanji-8">High School (8)</li>
              <li className="kanji-9">Hyogai Kanji (9)</li>
            </ul>
          </div>
          <p>White characters are not kanji, and have a complexity of 0.</p>
          <p>
            Whitespaces and{" "}
            <span className="kanji-10">
              <b>Jinmeiyo Kanji</b>
            </span>{" "}
            are excluded from evaluation.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div className={`${blob} text-start text-white content-start`}>
          <h2 className="text-xl font-semibold">Mode:</h2>
        </div>
        <div className={`${blob} text-white content-start`}>
          <h2 className="text-xl font-semibold">Complexity:</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div className={`${blob} text-start text-white content-start pt-3`}>
          <h3 className="text-lg font-semibold">Input Kanji Here</h3>
          <textarea
            name="jp-text"
            rows={10}
            placeholder="Paste kanji here..."
            className="text-black bg-white/90 rounded-lg text-lg px-2 py-1"
          ></textarea>
        </div>
        <div className={`${blob} text-start text-white content-start pt-3`}>
          <h3 className="text-lg font-semibold">Result</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2">
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
      </div>
    </div>
  );
};

export default App;
