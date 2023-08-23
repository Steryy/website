import styles from "../../Term.module.css";
import "../../prism.css";
import {
  component$,
  Signal,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import text from "./text";

import Prism from "prismjs";

import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-bash';

import 'prismjs/themes/prism.css'
const html = Prism.highlight(text, Prism.languages.bash, "bash");
const code: string[] = html.split("\n");

const lineChars: number[] = [];
const regex = /(<([^>]+)>)/gi;
let previous_span=""

for (let i = 0; i < code.length; i++) {
	const spans = code[i].match(/\<span\s+class="(.*?)">/g) ||[]
	const closed =code[i].match(/<\/span>/g)||[]
  const chars = code[i].replace(regex, "").trim();
	if (spans > closed){
		code[i] = code[i] +"</span>"
		previous_span = spans[spans.length-1]
	}
	if (previous_span != ""  && spans <=closed){
		code[i] = previous_span + code[i]
		if (closed > spans){
				previous_span = ""

		}else{
		code[i] = code[i]+"</span>"
		}

	}
  lineChars[i] = chars.length;
}
interface TypeWriterProps {
  charTime: number;
  lineTime: number;
  pause: Signal;
  lines: number;
  bacgroundColor: string;
}
function cursor(index: number, currLine: number) {
  if (index == currLine) {
    return <div class={styles.cursor}></div>;
  }

  return <span class={"clear-both"}></span>;
}
enum lineNumbersType {
  NoLineNumbers,
  LineNumbers,
  RelativeNumbers,
  RelativeLineNumbers,
}
const delay = (time: number) => new Promise((res) => setTimeout(res, time));
export default component$(({
  charTime,
  lineTime,
  pause,
  lines,
  bacgroundColor,
}: TypeWriterProps) => {
  const numbers: lineNumbersType = lineNumbersType.RelativeLineNumbers;
  const chartime = charTime > 0 ? charTime : 0.1;
  const linetime = lineTime > 0 ? lineTime : 0.1;
  const bacgroundcolor = bacgroundColor ? bacgroundColor : "#000000";
  const maxlines = lines > 0 ? lines : 10;
  const currLine = useSignal(-1);
  const height: number = 1.5 * maxlines;
  const stl = {
    height: `${height}em`,
    bacgroundColor: bacgroundcolor,
  };
		const lineHeight =' h-5 md:h-6'
  function ifPrint(item: string, index: number) {
    if (currLine.value > index + maxlines - 1) {
      return false;
    }
    if (currLine.value < index) {
      return false;
    }

    return true;
  }
  useVisibleTask$(() => {
    delay(100).then(() => {
      currLine.value++;
    });
  });
  return (
    <div style={stl} class="overflow-hidden relative ">
      <div class={styles.lineNumbers}>
        {code.map((item: string, index: number) => {
          if (!ifPrint(item, index)) {
            return;
          }
          let num = index + 1;
          if (numbers == null) {
            num = 1;
          }
          return (
            <span
              class={index == currLine.value ? "currentLineNumber " + lineHeight : lineHeight}
              key={index}
            >
              {num}
            </span>
          );
        })}
      </div>
      <div class="absolute left-[3.6ch] top-0 font-mono">
        {code.map((item: string, index: number) => {
          const time = lineChars[index] * chartime / 10 + 0.01;
          let showclass = "h-4";
          if (!ifPrint(item, index)) {
            showclass = "hidden h-0";
            return;
          }
          let num = lineChars[index];
          if (num == 0) {
            num = 1;
          }
          const animation = currLine.value == index
            ? {
              "--num-ch": num,
              "--ch": `${num}ch`,
              "--time": `${time}s`,
              "--delay": `${linetime}s`,

              animationPlayState: pause.value ? "paused" : "running",
            }
            : {};

          let classs: string;
          if (currLine.value == index) {
            classs = styles["currentLine"] + " w-0  float-left";
          } else if (index < currLine.value) {
            classs = ` ${styles["completedLine"]}`;
          } else {
            classs = "w-0";
          }

          return (
            <div key={index} class={showclass + lineHeight}>
              <div
                onAnimationEnd$={() => {
                  if (code.length - 2 >= currLine.value) {
                    currLine.value++;
                  } else {
                    pause.value = true;
                  }
                }}
                style={animation}
                class={classs + " overflow-hidden whitespace-pre "}
                dangerouslySetInnerHTML={item}
              >
              </div>
              {cursor(index, currLine.value)}
            </div>
          );
        })}
      </div>
    </div>
  );
});
