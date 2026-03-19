import { c as createComponent } from './astro-component_DNz8mnJs.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from './entrypoint_D0U7yOda.mjs';
import { $ as $$Layout } from './Layout_CLlpX-vA.mjs';
import 'clsx';

const siteConfig = {
  name: "Rowan",
  social: {
    github: "https://github.com/chickoftheseus",
    lastfm: "https://last.fm/user/chickoftheseus"
  }
};

const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold mb-8 text-gray-800">About</h1> <div class="flex flex-col md:flex-row gap-8 items-center md:items-start"> <div class="w-48 h-48 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center border-4 border-pink-200"> <span class="text-pink-400">Photo</span> </div> <div> <h2 class="text-2xl font-semibold mb-4 text-gray-800">${siteConfig.name}</h2> <p class="text-gray-600 mb-6">
Developer, music enthusiast, and cat parent. I build things on the internet
        and listen to a lot of music.
</p> <div class="flex gap-4 flex-wrap"> ${Object.entries(siteConfig.social).map(([platform, url]) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-pink-100 text-pink-600 hover:bg-pink-200 hover:text-pink-500 transition-colors"> ${platform.charAt(0).toUpperCase() + platform.slice(1)} </a>`)} </div> </div> </div> </section>`;
}, "/Users/rowan/amelierowan.dev/src/components/content/About.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "about | rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> ${renderComponent($$result2, "About", $$About$1, {})} </main> ` })}`;
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
