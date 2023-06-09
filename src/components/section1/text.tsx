export default `
import styles from "../styles/Term.module.css";
import text from "./text";
import Prism from 'prismjs';

import React, { useState } from "react";
let html = Prism.highlight(text,Prism.languages.js, 'js')
console.log(html)
let arr: string[];
let lineChars: number[]
lineChars = []
arr = html.split("\n");
const regex = /(<([^>]+)>)/gi;
for (var i = 0; i < arr.length; i++) {
arr[i] = arr[i];

const chars = arr[i].replace(regex, "");
lineChars[i] = chars.length

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
console.log(index)
return (<div className={styles.cursor}></div>)
}

return

}
export default function Termianl({
charTime,
lineTime,
pause,
charSize,
lines,
bacgroundColor,
}: TypeWriterProps) {
var chartime = charTime > 0 ? charTime : 0.1;
var linetime = lineTime > 0 ? lineTime : 0.1;
var charsize = charSize ? charSize : "18px";
var bacgroundcolor = bacgroundColor ? bacgroundColor : "#000000";
var maxlines = lines > 0 ? lines : 10;
pause = pause ? true : false;
var [currLine, setCurrLine] = useState(0);
const height: number =
Number(charsize.substring(0, charsize.length - 2)) * maxlines;
const stl = {
fontSize: charSize,
height: \`\${height}px\`,
bacgroundColor: bacgroundcolor,
} as React.CSSProperties;

return (
<div style={stl} className={styles.monitor}>
<pre>

{
arr.map((item: string, index: number) => {
let time = lineChars[index] * chartime + 0.01

let num = lineChars[index]
if (num == 0) {
num = 1
}
let animation = (currLine == index ? {

// "--time":delayTable[index]+"s",
"--num-ch": num,
"--ch": \`\${num}ch\`,
"--time": \`\${time}s\`,
"--delay": \`\${linetime}s\`,

} : {}) as React.CSSProperties
let classNames = \`\${styles["line"]}\`
if (currLine == index) {
classNames = classNames + \` \${styles["currentLine"]}\`

}
else if (index < currLine) {

classNames = classNames + \` \${styles["completedLine"]}\`

}


return (
<div key={index}>

<div
onAnimationEnd={() => {
setCurrLine(
arr.length - 1 >= index + 1 ? index + 1 : currLine
);
}}
style={animation}
className={classNames}
dangerouslySetInnerHTML={{ __html: item }}
></div>

{cursor(index, currLine)}
<br />
</div>

)
})}

</pre>
</div>
);
}
`;
