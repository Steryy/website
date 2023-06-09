import { component$ } from "@builder.io/qwik";
type progresComponent = {
	text: string | undefined;
	perc: number;
	percText: string | undefined;
	colorFg: string;
	colorBg: string;
};
export default component$(
	({ text, perc, colorBg, colorFg, percText }: progresComponent) => {
		const left = perc > 0 ? "left-0" : `left-[-128%]`;
		const proc = perc > 0 ? perc : perc * (-1);
		return (
			<>
				<div class="flex justify-between mb-1 mr-10 ml-10">
					<span
						class={`text-base font-medium ${colorFg} dark:text-white`}
					>
						{text}
					</span>
					<span
						class={`text-sm font-medium ${colorFg} dark:text-white`}
					>
						{percText != undefined ? percText : perc + "%"}
					</span>
				</div>
				<div>
					<div
						class={`pl-5 relative  w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}
					>
						<div
							class={`${colorBg} absolute ${left} h-2.5 rounded-full`}
							style={`width: ${proc}%`}
						>
						</div>
					</div>
				</div>
			</>
		);
	},
);
