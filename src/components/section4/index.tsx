import { siEslint, siGithub, siTailwindcss } from "simple-icons";
import { QwikLogo } from "../starter/icons/qwik";
const PrismJs = () => (
	<svg width="35" height="35">
		<image
			xlink:href="https://prismjs.com/assets/logo.svg"
			src="https://prismjs.com/assets/logo.svg"
			width="35"
			height="35"
		/>
	</svg>
);
type card = {
	title: string;
	colorFg: string;
	url: string;
	text: any;
	icon: any;
};
const cards: card[] = [
	{
		title: "GitHub",
		colorFg: "text-[#181717]",
		url: "https://github.com/",
		text: (
			<>
				Github
			</>
		),
		icon: siGithub,
	},
	{
		title: "PrismJs",
		icon: PrismJs,
		url: "https://prismjs.com/",
		colorFg: "text-[#06B6D4]",

		text: <>tailwindcss</>,
	},
	{
		title: "tailwindcss",
		icon: siTailwindcss,
		colorFg: "text-[#06B6D4]",
		url: "https://tailwindcss.com/",
		text: <>tailwindcss</>,
	},
	{
		title: "Eslint",
		icon: siEslint,
		url: "https://eslint.org/",
		colorFg: "text-[#4B32C3]",

		text: <>EsLint</>,
	},
	{
		title: "Qwik",
		icon: QwikLogo,
		url: "https://qwik.builder.io/",
		colorFg: "text-[#0078D6]",

		text: <>My basement doesn't have any Windows</>,
	},
];
export default function Section4() {
	return (
		<div class="w-full min-h-[20vh] bg-zinc-600 relative overflow-hidden">
			<div class="text-3xl sm:text-xl pl-3 pt-10  ">
				Technologies Used
			</div>
			<div class=" mx-auto py-5 flex  justify-between gap-10  ">
				{cards?.map((item, id) => {
					let Icon: any;
					if (typeof (item.icon) == "function") {
						Icon = item.icon;
					} else {
						const Pris = () => (
							<svg width="35" height="35" viewbox="0 0 25 25">
								<path d={item.icon.path}/>
							</svg>
						);
						Icon = Pris;
					}
					return (
						<div class={"group w-40"} key={id}>
							<a href={`${item.url}`}>
								<div
									class={`${item.colorFg} w-min text-4xl ml-auto mr-auto mt-3`}
								>
									<Icon />
								</div>
								<div class="text-gray-100 text-center text-base group-hover:block hidden">
									{item.title}
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
