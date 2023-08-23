import { SiEslint, SiGithub, SiTailwindcss } from "@qwikest/icons/simpleicons";
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
const cards = [
  {
    title: "Qwik",
    icon: QwikLogo,
    url: "https://qwik.builder.io/",
    colorFg: "text-[#0078D6]",

    text: <>My basement doesn't have any Windows</>,
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
    icon: SiTailwindcss,
    colorFg: "text-[#06B6D4]",
    url: "https://tailwindcss.com/",
    text: <>tailwindcss</>,
  },
  {
    title: "Eslint",
    icon: SiEslint,
    url: "https://eslint.org/",
    colorFg: "text-[#4B32C3]",

    text: <>EsLint</>,
  },
  {
    title: "GitHub",
    colorFg: "text-[#181717]",
    url: "https://github.com/",
    text: <>Github</>,
    icon: SiGithub,
  },
];
export default function Section4() {
  return (
    <div class="w-full min-h-[20vh] bottom-8 md:bottom-0 bg-gray-600 relative overflow-hidden">
      <div class="text-3xl  pl-3 pt-10  font-bold ">Technologies Used</div>
      <div class=" mx-auto py-5 md:flex  justify-center grid grid-cols-3  gap-10">
        {cards?.map((item, id) => {
          const Icon = item.icon;
          return (
            <div class={"group w-40 h-20 m-auto"} key={id}>
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
