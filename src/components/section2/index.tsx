import {
  SiGnubash,
  SiLinux,
  SiNeovim,
  SiWindows,
} from "@qwikest/icons/simpleicons";
import Progress from "../shared/progress";
import Card from "../shared/card";

import styles from "../../css/InterestCard.module.css"
const cards = [
  {
    title: "Linux",
    colorBg: "#FCC624",
    colorFg: "black",
    proc: -128,
    procText: "Overflow",
    text: (
      <>
        <span class={"text-red-900 font-black"}>
          Error: 
					Integer Overflow:
        </span>
          <br />
          Integer cant be bigger than 127
      </>
    ),
    icon: SiLinux,
  },
  {
    title: "NeoVim",
    icon: SiNeovim,
    colorFg: "#57A143",

    text: <>dwadwadwa</>,
    proc: 80,
    colorBg: "#57A143",
  },
  {
    title: "Bash",
    icon: SiGnubash,
    colorFg: "#000000",

    text: <>dwadwadwa</>,
    proc: 80,
    colorBg: "#dd1122",
  },
  {
    title: "Windows",
    icon: SiWindows,
    colorFg: "#0078D6",
    proc: 10,

    text: <>My basement doesn't have any Windows</>,
    // text: "My basement doesn't have any Windows.",
    colorBg: "#0078D6",
  },
];

export default function Section2() {
  return (
    <div class="w-full min-h-screen bg-gray-100 relative overflow-hidden">
      <div class="text-3xl sm:text-xl pl-3 pt-20  ">
        Interest
      </div>
      <div class="w-3/4 mx-auto py-20 grid md:grid-cols-2 gap-20 grid-cols-1 ">
        {cards?.map((item,id) => {
          const Icon = item.icon;
          const Text = item.text;
          return (
					<div key={id} class={styles.card}>
            <Card >
              <div class={'md:max-w-[50vw]  max-w-[70vw] md:min-w-[20vw]  min-w-[70vw]'}>
                <div
                  class={`text-[${item.colorFg}] w-min text-6xl ml-auto mr-auto mt-10`}
                >
                  <Icon />
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
						</div>
          );
        })}
      </div>
    </div>
  );
}
