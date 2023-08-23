import { component$, Slot, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "../css/Navbar.module.css";

import { qwikify$ } from "@builder.io/qwik-react";

import { FaBars } from "react-icons/fa";
const FaQwik = qwikify$(FaBars);
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

       // <!-- <span class="hover:font-bold cursor-pointer"><img src="/favicon.ico"/></span> -->
export default component$(() => {
  const opened = useSignal(false);
  return (
    <main>
      <nav class="bottom-0 text-3xl  md:top-0 md:h-min flex dark:bg-white dark:text-black justify-between z-30 text-white bg-black  p-3  fixed w-full xlg">
        <span class="hover:font-bold cursor-pointer"></span> 
      <div
        id="myNav"
        class="fixed md:static  md:h-min  h-screen bg-black z-50  top-0 transition-all  left-0"
        style={{ width: opened.value ? "100%" : "0px" }}
      >
        <button
          onClick$={() => {
            opened.value = false;
          }}
          class="absolute right-7 bottom-8 text-white text-6xl md:hidden"
        >
          &times;
        </button>
        <div
          class={
            styles.myhover +
            " flex items-center justify-center flex-col md:flex-row text-5xl absolute md:static right-28 bottom-20 md:text-xl"
          }
        >
          <a href="#intro">Me</a>
          <a href="#interest">Interests</a>
          <a href="#projects">projects</a>
        </div>
      </div>
        <button
          onClick$={() => {
            opened.value = true;
          }}
        >
          <FaQwik
            onClick$={() => {
              opened.value = true;
            }}
            className="md:hidden hover:rotate-90 transition-transform"
          />
        </button>
      </nav>

      <Slot />
    </main>
  );
});
