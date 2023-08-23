import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Section1 from "~/components/section1";
import Section2 from "~/components/section2";
import Section3 from "~/components/section3";
import Section4 from "~/components/section4";


export default component$(() => {
  return (
    <>
			<a id='intro'/>
      <Section1 />

			<a id='interest'/>
      <Section2 />

			<a id='projects'/>
      <Section3 />
			<Section4/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Index",
  meta: [
    {
      name: "description",
      content: "Personal site",
    },
  ],
};
