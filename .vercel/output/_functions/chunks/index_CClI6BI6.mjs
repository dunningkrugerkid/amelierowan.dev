import { c as createComponent } from './astro-component_CwGRRlTM.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_R69GC1JZ.mjs';
import { $ as $$Layout } from './Layout_BDSe6moL.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="pt-16 pb-12 bg-gradient-to-b from-pink-100 to-pink-50"> <div class="max-w-6xl mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
hey, i'm <span class="text-pink-500">rowan</span> </h1> <p class="text-xl md:text-2xl text-gray-600 mb-8">
welcome to my corner of the internet
</p> <div class="flex gap-4 justify-center flex-wrap"> <a href="/music" class="px-6 py-3 rounded-lg font-medium bg-pink-400 text-white hover:bg-pink-500 transition-colors shadow-sm">
music
</a> <a href="/cat" class="px-6 py-3 rounded-lg font-medium bg-white text-gray-700 hover:bg-pink-50 border border-pink-200 transition-colors">
my cat
</a> <a href="/about" class="px-6 py-3 rounded-lg font-medium bg-white text-gray-700 hover:bg-pink-50 border border-pink-200 transition-colors">
about
</a> </div> </div> </div> </section> <section class="max-w-6xl mx-auto px-4 py-12"> <h2 class="text-2xl font-semibold mb-6 text-gray-800">quick links</h2> <div class="grid md:grid-cols-3 gap-6"> <a href="/music" class="block p-6 rounded-lg bg-white hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm"> <h3 class="font-semibold mb-2 text-gray-800">music</h3> <p class="text-gray-600">albums and songs i love</p> </a> <a href="/cat" class="block p-6 rounded-lg bg-white hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm"> <h3 class="font-semibold mb-2 text-gray-800">my cat</h3> <p class="text-gray-600">photos of my cat</p> </a> <a href="/about" class="block p-6 rounded-lg bg-white hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm"> <h3 class="font-semibold mb-2 text-gray-800">about</h3> <p class="text-gray-600">more about me</p> </a> </div> </section> </main> ` })}`;
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
