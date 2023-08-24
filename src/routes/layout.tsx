import { component$, Slot, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from "../css/Navbar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export default component$(() => {

  const opened = useSignal(false);
	return (
	<main>
      <nav class="bottom-0 text-3xl  md:top-0 md:h-min flex  justify-between z-30 text-white bg-black  p-3  fixed w-full xlg">
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
          class="absolute right-7 bottom-14 text-white text-6xl md:hidden"
        >
          &times;
        </button>
        <div
          class={
            styles.myhover +
            " flex items-center justify-center flex-col md:flex-row text-5xl absolute md:static right-28 bottom-32 md:text-xl"
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
          <i
            onClick$={() => {
              opened.value = true;
            }}
            class="bi bi-list hover:rotate-90 transition-transform text-xl md:hidden"
          />
        </button>
      </nav>

      <Slot />
    </main>
	);
});
