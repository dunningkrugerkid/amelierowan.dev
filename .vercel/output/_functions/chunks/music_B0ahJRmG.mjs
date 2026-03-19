import { c as createComponent } from './astro-component_DNz8mnJs.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_D0U7yOda.mjs';
import { r as renderScript } from './script_wLrYB3ql.mjs';
import { $ as $$Layout } from './Layout_CLlpX-vA.mjs';

const $$Music = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "music | rowan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-2 text-gray-800">music</h1> <p class="text-gray-600 mb-8">
what i've been listening to
</p> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4 text-gray-800">now playing</h2> <div id="now-playing-container" class="bg-white border border-pink-100 rounded-lg p-6"> <div class="animate-pulse flex flex-col md:flex-row gap-6 items-center"> <div class="w-32 h-32 bg-pink-100 rounded flex-shrink-0"></div> <div class="flex-1"> <div class="h-6 bg-pink-100 rounded w-3/4 mb-2"></div> <div class="h-4 bg-pink-100 rounded w-1/2"></div> </div> </div> </div> <p class="text-gray-500 text-sm mt-2">shows what's playing on my mac</p> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4 text-gray-800">current favorites</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="favorites-container"> <!-- Favorites loaded via client-side, or you can manually add here --> </div> </section> </main> ` })} ${renderScript($$result, "/Users/rowan/amelierowan.dev/src/pages/music.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rowan/amelierowan.dev/src/pages/music.astro", void 0);

const $$file = "/Users/rowan/amelierowan.dev/src/pages/music.astro";
const $$url = "/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Music,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
