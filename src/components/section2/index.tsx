import { siGnubash, siLinux, siNeovim, siWindows } from "simple-icons";
import Progress from "../shared/progress";
import Card from "../shared/card";

import styles from "../../css/InterestCard.module.css";
const cards = [
  {
    title: "Linux",
    colorBg: "#FCC624",
    colorFg: "text-black",
    proc: -128,
    procText: "Overflow",
    text: (
      <>
        <span class={"text-red-900 font-black"}>Error: Integer Overflow:</span>
        <br />
        Integer cant be bigger than 127
      </>
    ),
    icon: siLinux,
  },
  {
    title: "NeoVim",
    icon: siNeovim,
    colorFg: "#57A143",

    text: (
      <>
        Everyone is joking about exiting vim. But noone knows how to exit
        GNU/Emacs.
      </>
    ),
    proc: 80,
    colorBg: "#57A143",
  },
  {
    title: "Bash",
    icon: siGnubash,
    colorFg: "#000000",

    text: <>Only language you have to know little bit to use it.</>,
    proc: 60,
    colorBg: "#dd1122",
  },
  {
    title: "Windows",
    icon: siWindows,
    colorFg: "#0078D6",
    proc: 10,

    text: (
      <>Who need's windows if you have light from monitor and led strips?</>
    ),
    // text: "My basement doesn't have any Windows.",
    colorBg: "#0078D6",
  },
];

export default function Section2() {
  return (
    <div class="w-full min-h-screen bg-gray-100 relative overflow-hidden">
      <div class="text-3xl sm:text-xl pl-3 pt-20  ">Interest</div>
      <div class="w-3/4 mx-auto py-5 grid md:grid-cols-2 gap-10  ">
        {cards?.map((item, id) => {
          const Icon = item.icon.path;
          const Text = item.text;
          return (
            <div key={id} class={styles.card}>
              <Card>
                <div class={"md:max-w-[50vw] min-w-[200px] max-w-[70vw]"}>
                  <div
                    class={`${item.colorFg} w-min text-6xl ml-auto mr-auto mt-10`}
                  >
                    <svg width={"50px"} viewbox="0 0 24 24">
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

                  <div class="text-gray-700 text-base">{Text}</div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
