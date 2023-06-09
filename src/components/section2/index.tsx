import { siGnubash, siLinux, siNeovim, siWindows } from "simple-icons";
console.log(siGnubash);
import Progress from "../shared/progress";
import Card from "../shared/card";
const cards = [
	{
		title: "Linux",
		colorBg: "bg-[#FCC624]",
		colorFg: "text-black",
		proc: -128,
		procText: "Overflow",
		text: (
			<>
				<span class={"text-red-900"}>
					Error: Integer Overflow:
					<br />
					Integer cant be bigger than 127
				</span>
			</>
		),
		icon: siLinux,
	},
	{
		title: "NeoVim",
		icon: siNeovim,
		colorFg: "text-[#57A143]",

		text: <>Lorem ipsum dolor sit cin.</>,
		proc: 80,
		colorBg: "bg-[#57A143]",
	},
	{
		title: "Bash",
		icon: siGnubash,
		colorFg: "text-black",
		proc: 60,

		text: (
			<>
				Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
				sint cillum sint consectetur cupidatat.
			</>
		),
		colorBg: "bg-black",
	},
	{
		title: "Windows",
		icon: siWindows,
		colorFg: "text-[#0078D6]",
		proc: 10,

		text: <>My basement doesn't have any Windows</>,
		// text: "My basement doesn't have any Windows.",
		colorBg: "bg-[#0078D6]",
	},
];

export default function Section2() {
	return (
		<div class="w-full min-h-screen bg-gray-100 relative overflow-hidden">
			<div class="text-3xl sm:text-xl pl-3 pt-20  ">
				Interest
			</div>
			<div class="w-3/4 mx-auto py-5 grid md:grid-cols-2 gap-10  ">
				{cards?.map((item, id) => {
					const Icon = item.icon.path;
					const Text = item.text;
					return (
						<Card key={id}>
							<div
								class={"md:max-w-[50vw] min-w-[200px] max-w-[70vw]"}
							>
								<div
									class={`${item.colorFg} w-min text-6xl ml-auto mr-auto mt-10`}
								>
									<svg width={'50px'} viewbox="0 0 24 24">
										<path d={Icon} fill={`#${item.icon.hex}`} />
									</svg>
								</div>
								<Progress
									text={item.title}
									perc={item.proc}
									percText={item?.procText}
									colorBg={item?.colorBg}
									colorFg={item?.colorFg}
								/>

								<div class="text-gray-700 text-base">
									{Text}
								</div>
							</div>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
