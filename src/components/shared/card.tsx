import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="max-w-max rounded  shadow-lg shadow-gray-900 bg-gray-50 ">
      <div class="px-6 py-4">
        <Slot/>
      </div>
    </div>
  );
});
