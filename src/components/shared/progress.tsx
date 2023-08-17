import {  component$ } from "@builder.io/qwik";
import styles from "../../css/progress.module.css"
type progresComponent = {
	text: string| undefined,
	perc: number,
	percText:string| undefined,
	colorFg: string,
	colorBg:string

}
const newShade = (hexColor:string , magnitude:number) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};
export default component$(({ text, perc, colorBg, colorFg, percText }: progresComponent) => {
	const left= perc > 0 ?0: `${perc}%`
	const proc = perc >0 ? perc : perc *(-1)

			const lightBg= newShade(colorBg,100);
	return (
		<>
			<div class="flex justify-between mb-1 mr-10 ml-10">
				<span class={`text-base font-medium text-[${colorFg}] dark:text-white`}>
					{text}
				</span>
				<span class={`text-sm font-medium text-[${colorFg}] dark:text-white`}>
					{percText != undefined ? percText : perc+"%"}
				</span>
			</div>
			<div>

				<div class={`pl-[5%] relative  w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}>
					<div class={`absolute  h-2.5 rounded-full   ` + styles.progresBar} 
					style={{width: proc + "%",background: lightBg,
					"--barColor": colorBg,
					"--barColorLight": lightBg,

					left: left}}>
					</div>
				</div>
			</div>
		</>
	);
});
