import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Section1 from "~/components/section1";
import Section2 from "~/components/section2";
import Section3 from "~/components/section3";
import Section4 from "~/components/section4";

export default component$(() => {
	return (
		<>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
