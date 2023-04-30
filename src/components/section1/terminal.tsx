import styles from "../../Term.module.css";
import "../../prism.css";
import {
  component$,
  useSignal,
  // useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import text from "./text";

import Prism from "prismjs";

const html = Prism.highlight(text, Prism.languages.js, "js");
const arr: string[]= html.split("\n");
let lineChars: number[];
lineChars = [];
const regex = /(<([^>]+)>)/gi;
for (let i = 0; i < arr.length; i++) {
  // arr[i] = arr[i];

  const chars = arr[i].replace(regex, "");
  lineChars[i] = chars.length;
}
interface TypeWriterProps {
  charTime: number;
  lineTime: number;
  pause: boolean;
  charSize: string;
  lines: number;
  bacgroundColor: string;
}
function cursor(index: number, currLine: number) {
  if (index == currLine) {
    console.log(index);
    return <div class={styles.cursor}></div>;
  }

  return;
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
  charSize,
  lines,
  bacgroundColor,
}: TypeWriterProps) => {
  const numbers: lineNumbersType = lineNumbersType.RelativeLineNumbers;
  const chartime = charTime > 0 ? charTime : 0.1;
  const linetime = lineTime > 0 ? lineTime : 0.1;
  const bacgroundcolor = bacgroundColor ? bacgroundColor : "#000000";
  const maxlines = lines > 0 ? lines : 10;
  const pauses = pause ? true : false;
  const currLine = useSignal(-1);
  const height: number = 1.5 * maxlines;
  const stl = {
    height: `${height}em`,
    bacgroundColor: bacgroundcolor,
  };
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
    console.log("Wait before starting typing");
    delay(1000).then(() => (currLine.value++));
  });
  return (
    <div style={stl} class="overflow-hidden relative ">
      <div class={styles.lineNumbers}>
        {arr.map((item: string, index: number) => {
          // const time = lineChars[index] * chartime + 0.01;
          if (!ifPrint(item, index)) {
            return;
          }
          let num = index;
            if (numbers ==null) {
                num = 1
            }
          // if (
          //   numbers == lineNumbersType.RelativeNumbers ||
          //   numbers == lineNumbersType.RelativeLineNumbers
          // ) {
          //   num = Math.abs(currLine.value - index);
          //   if (
          //     numbers == lineNumbersType.RelativeLineNumbers &&
          //     index == currLine.value
          //   ) {
          //     num = index + 1;
          //   }
          // }

          return (
            <span
              class={index == currLine.value ? "currentLineNumber" : ""}
              key={index}
            >
              {num}
            </span>
          );
        })}
      </div>
      <div class="absolute left-[5ch] top-0">
        {arr.map((item: string, index: number) => {
          const time = lineChars[index] * chartime + 0.01;
          if (!ifPrint(item, index)) {
            return;
          }
          let num = lineChars[index];
          if (num == 0) {
            num = 1;
          }
          const animation = currLine.value == index
            ? {
              // "--time":delayTable[index]+"s",
              "--num-ch": num,
              "--ch": `${num}ch`,
              "--time": `${time}s`,
              "--delay": `${linetime}s`,

              animationPlayState: pauses ? "paused" : "running",
            }
            : {};
          let classs = `  ${styles["line"]}`;
          if (currLine.value == index) {
            classs = classs + ` ${styles["currentLine"]}`;
          } else if (index < currLine.value) {
            classs = classs + ` ${styles["completedLine"]}`;
          }

          return (
            <div key={index}>
              <div
                onAnimationEnd$={() => {
                  arr.length - 1 >= currLine.value
                    ? currLine.value++
                    : currLine.value;
                }}
                style={animation}
                class={classs}
                dangerouslySetInnerHTML={item}
              >
              </div>
              {cursor(index, currLine.value)}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
});
