import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { BsList } from "@qwikest/icons/bootstrap";
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
	return (
		<main>
			<nav class="flex dark:bg-white dark:text-black justify-between z-30 text-white bg-black  p-3  fixed w-full xlg">
				<span class="hover:font-bold">Meet Me</span>
				<BsList class="hover:rotate-90 transition-transform text-xl" />
			</nav>
			<Slot />
		</main>
	);
});
