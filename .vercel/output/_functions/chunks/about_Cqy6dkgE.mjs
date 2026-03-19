import { c as createComponent } from './astro-component_CM2WGPh_.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_D27yDQgx.mjs';
import { $ as $$Layout } from './Layout_BUZMFOna.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About | Rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container py-8"> <div class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold mb-8">About</h1> <div class="flex flex-col md:flex-row gap-8 items-center md:items-start"> <div class="w-48 h-48 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center"> <span class="text-gray-400 text-sm">Photo</span> </div> <div> <h2 class="text-2xl font-semibold mb-4">Rowan</h2> <p class="text-gray-600 mb-6">
Developer, music enthusiast, and cat parent. I build things on the internet
            and listen to a lot of music.
</p> <div class="flex gap-4"> <a href="https://github.com/chickoftheseus" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors">
GitHub
</a> <a href="https://last.fm/user/chickoftheseus" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-600 transition-colors">
Last.fm
</a> </div> </div> </div> </div> </main> ` })}`;
}, "/Users/rowan/amelierowan.dev/src/pages/about.astro", void 0);

const $$file = "/Users/rowan/amelierowan.dev/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
