import { c as createComponent } from './astro-component_CAtTQstT.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_mxYNU8JZ.mjs';
import { $ as $$Layout } from './Layout_BgzdrRcD.mjs';

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Music | Rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container py-8"> <h1 class="text-4xl font-bold mb-4">Music</h1> <p class="text-gray-600 mb-8">
What I've been listening to lately
</p> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Now Playing</h2> <div class="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
Loading now playing...
</div> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Top Tracks</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> <div class="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
Loading tracks...
</div> </div> </section> <section> <h2 class="text-2xl font-semibold mb-4">Top Artists</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4"> <div class="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
Loading artists...
</div> </div> </section> </main> ` })}`;
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
