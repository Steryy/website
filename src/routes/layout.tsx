import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

import { qwikify$ } from "@builder.io/qwik-react";

import { FaBars } from "react-icons/fa";
const FaQwik = qwikify$(FaBars);
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <main>
      <nav class="flex dark:bg-white dark:text-black justify-between z-30 text-white bg-black  p-3  fixed w-full xlg">
        <span class="hover:font-bold">Meet Me</span>
        <FaQwik className="hover:rotate-90 transition-transform" />
      </nav>
      <Slot />
    </main>
  );
});
