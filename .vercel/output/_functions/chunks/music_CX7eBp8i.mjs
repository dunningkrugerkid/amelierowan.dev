import { c as createComponent } from './astro-component_CwGRRlTM.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_R69GC1JZ.mjs';
import { $ as $$Layout } from './Layout_BDSe6moL.mjs';

const favoriteAlbums = [
  {
    title: "Brat",
    artist: "Charli XCX",
    year: 2024,
    cover: "https://lastfm.freetls.fastly.net/i/u/300x300/a8b50e5e9e9d4d7e8f0e9e9e9e9e9e9e.png"
  },
  {
    title: "Midnights",
    artist: "Taylor Swift",
    year: 2022
  },
  {
    title: "SOUR",
    artist: "Olivia Rodrigo",
    year: 2021
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    year: 2020
  }
  // Add more albums here!
];
const favoriteTracks = [
  "apple - charli xcx",
  "karma - taylor swift",
  "drivers license - olivia rodrigo"
  // Add more tracks here!
];

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "music | rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-2 text-gray-800">music</h1> <p class="text-gray-600 mb-12">
albums and songs i've been loving lately
</p> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-6 text-gray-800">favorite albums</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${favoriteAlbums.map((album) => renderTemplate`<div class="bg-white border border-pink-100 rounded-lg overflow-hidden hover:border-pink-300 hover:shadow-md transition-all group"> ${album.cover ? renderTemplate`<img${addAttribute(album.cover, "src")}${addAttribute(`${album.title} by ${album.artist}`, "alt")} class="w-full aspect-square object-cover group-hover:scale-105 transition-transform" loading="lazy">` : renderTemplate`<div class="w-full aspect-square bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center"> <span class="text-pink-300 text-6xl">♪</span> </div>`} <div class="p-4"> <h3 class="font-semibold text-gray-800 lowercase truncate">${album.title}</h3> <p class="text-gray-600 text-sm lowercase">${album.artist}</p> ${album.year && renderTemplate`<p class="text-pink-400 text-xs mt-1">${album.year}</p>`} </div> </div>`)} </div> </section> <section> <h2 class="text-2xl font-semibold mb-6 text-gray-800">on repeat</h2> <ul class="space-y-3"> ${favoriteTracks.map((track) => renderTemplate`<li class="bg-white border border-pink-100 rounded-lg px-4 py-3 hover:border-pink-300 transition-colors"> <span class="text-gray-800 lowercase">${track}</span> </li>`)} </ul> </section> </main> ` })}`;
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
