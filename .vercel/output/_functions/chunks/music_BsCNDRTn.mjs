import { c as createComponent } from './astro-component_DfX6KPoh.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent, n as Fragment } from './entrypoint_D7DLjsAF.mjs';
import { $ as $$Layout } from './Layout_DMnWiYgO.mjs';
import { r as renderScript } from './script_jlZoKnuA.mjs';

const $$NowPlaying = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NowPlaying;
  const {
    title = "Unknown",
    artist = "Unknown",
    album,
    artwork,
    url,
    isPlaying = false,
    loading = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center"> ${loading ? renderTemplate`<div class="w-32 h-32 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>` : artwork ? renderTemplate`<img${addAttribute(artwork, "src")}${addAttribute(title, "alt")} class="w-32 h-32 rounded object-cover flex-shrink-0" loading="lazy">` : renderTemplate`<div class="w-32 h-32 bg-gray-200 rounded flex items-center justify-center flex-shrink-0"> <span class="text-gray-400 text-sm">No art</span> </div>`} <div class="flex-1 text-center md:text-left"> ${loading ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="h-6 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div> <div class="h-4 bg-gray-200 rounded w-32 animate-pulse"></div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h3 class="text-xl font-semibold mb-1"> ${url ? renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline"> ${title} </a>` : title} </h3> <p class="text-gray-600">${artist}</p> ${album && renderTemplate`<p class="text-gray-500 text-sm">${album}</p>`}${isPlaying && renderTemplate`<span class="inline-flex items-center gap-1 mt-2 text-sm text-white bg-black px-2 py-1 rounded"> <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
Now Playing
</span>`}` })}`} </div> </div>`;
}, "/Users/rowan/amelierowan.dev/src/components/music/NowPlaying.astro", void 0);

const $$MusicStats = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="space-y-12"> <section> <h2 class="text-2xl font-semibold mb-4 text-gray-800">now playing</h2> <div id="now-playing-container"> ${renderComponent($$result, "NowPlaying", $$NowPlaying, { "loading": true })} </div> </section> <section> <h2 class="text-2xl font-semibold mb-4 text-gray-800">top tracks <span class="text-sm font-normal text-pink-400">(7 days)</span></h2> <div id="top-tracks-container" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> <div class="bg-pink-50 border border-pink-100 rounded-lg p-8 text-center text-gray-500 col-span-full animate-pulse">loading...</div> </div> </section> <section> <h2 class="text-2xl font-semibold mb-4 text-gray-800">top artists <span class="text-sm font-normal text-pink-400">(7 days)</span></h2> <div id="top-artists-container" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> <div class="bg-pink-50 border border-pink-100 rounded-lg p-8 text-center text-gray-500 col-span-full animate-pulse">loading...</div> </div> </section> </div> ${renderScript($$result, "/Users/rowan/amelierowan.dev/src/components/music/MusicStats.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rowan/amelierowan.dev/src/components/music/MusicStats.astro", void 0);

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "music | rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-2 text-gray-800">music</h1> <p class="text-gray-600 mb-8">
what i've been listening to lately
</p> ${renderComponent($$result2, "MusicStats", $$MusicStats, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rowan/amelierowan.dev/src/components/music/MusicStats.astro", "client:component-export": "default" })} </main> ` })}`;
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
