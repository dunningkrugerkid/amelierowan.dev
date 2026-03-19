import { c as createComponent } from './astro-component_C4ecrRZu.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_EyPBh7p7.mjs';
import { r as renderScript } from './script_BLIihV2y.mjs';
import { $ as $$Layout } from './Layout_DP8js5N1.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rowan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="pt-16 pb-12"> <div class="max-w-6xl mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-5xl md:text-7xl font-bold mb-4">
Hey, I'm Rowan
</h1> <p class="text-xl md:text-2xl text-gray-600 mb-8">
Welcome to my corner of the internet
</p> <div class="flex gap-4 justify-center flex-wrap"> <a href="/music" class="px-6 py-3 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors">
Music
</a> <a href="/cat" class="px-6 py-3 rounded-lg font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
My Cat
</a> <a href="/about" class="px-6 py-3 rounded-lg font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
About
</a> </div> </div> </div> </section> <section class="max-w-6xl mx-auto px-4 py-12"> <h2 class="text-2xl font-semibold mb-6">Now Playing</h2> <div id="now-playing-container" class="bg-gray-50 rounded-lg p-6"> <div class="animate-pulse flex flex-col md:flex-row gap-6 items-center"> <div class="w-32 h-32 bg-gray-200 rounded flex-shrink-0"></div> <div class="flex-1"> <div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div> <div class="h-4 bg-gray-200 rounded w-1/2"></div> </div> </div> </div> </section> <section class="max-w-6xl mx-auto px-4 py-12"> <h2 class="text-2xl font-semibold mb-6">Quick Links</h2> <div class="grid md:grid-cols-3 gap-6"> <a href="/music" class="block p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"> <h3 class="font-semibold mb-2">Music</h3> <p class="text-gray-600">What I've been listening to</p> </a> <a href="/cat" class="block p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"> <h3 class="font-semibold mb-2">My Cat</h3> <p class="text-gray-600">Photos of my cat</p> </a> <a href="/about" class="block p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"> <h3 class="font-semibold mb-2">About</h3> <p class="text-gray-600">More about me</p> </a> </div> </section> </main> ` })} ${renderScript($$result, "/Users/rowan/amelierowan.dev/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rowan/amelierowan.dev/src/pages/index.astro", void 0);

const $$file = "/Users/rowan/amelierowan.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
