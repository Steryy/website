import {
  component$,
  Signal,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Termianl from "./terminal";
type interS = {
  paused: Signal;
  scroll: Signal;
};
const InterSection = component$(({ paused, scroll }: interS) => {
  useVisibleTask$(() => {
    if (scroll.value == 0 && paused.value == false) {
      paused.value = true;

      document.body.classList.add("stop-scrolling");
      setTimeout(() => {
        window.scroll(0, 95);
      }, 100);
      setTimeout(() => {
        document.body.classList.remove("stop-scrolling");
      }, 100);
    }
  });

  return (
    <div class={" mt-20 bg-red-100"}>
    </div>
  );
});

export default component$(() => {
  const paused = useSignal(false);
  const scroll = useSignal(0);
  useVisibleTask$(() => {
    scroll.value = window.scrollY;
    if (window.scrollY > 300) {
      paused.value = true;
    }
  });
  return (
    <div class={"dark:bg-black dark:text-white"}>
      <div class="w-full relative pt-32 min-h-screen  ">
        <div class="text-3xl lg:text-3xl absolute top-[150px]  left-[50%] -translate-x-1/2 ">
          Welcome
        </div>
        <div class="w-[50ch]   md:text-lg   text-xs absolute top-80 
                left-1/2
                -translate-x-1/2
                md:mr-0  bg-black text-white   dark:bg-gray-950">
          <Termianl
            charTime={0.1}
            lineTime={0.1}
            pause={paused}
            lines={22}
            bacgroundColor={"#000000"}
          />
        </div>
        <div
          style={{
            "clipPath":
              " polygon(55% 13%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0 60%, 42% 42%); ",
          }}
          class="absolute w-full min-h-[50vh]  bottom-0 dark:bg-white dark:text-black"
        >
          Penguin
        </div>
      </div>
      <div class={"h-40 pt-30"}>
        <InterSection paused={paused} scroll={scroll} />
      </div>
    </div>
  );
});
