import { c as createComponent } from './astro-component_DfX6KPoh.mjs';
import 'piccolore';
import { h as addAttribute, p as renderHead, q as renderSlot, r as renderTemplate } from './entrypoint_D7DLjsAF.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "rowan", description = "personal website - music, code, and cats" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="https://amelierowan.dev"><title>${title}</title>${renderHead()}</head> <body class="bg-pink-50"> <header class="border-b border-pink-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50"> <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"> <a href="/" class="text-xl font-bold text-pink-600 hover:text-pink-500 transition-colors">
rowan
</a> <ul class="flex gap-6"> <li><a href="/music" class="text-gray-700 hover:text-pink-500 transition-colors">music</a></li> <li><a href="/cat" class="text-gray-700 hover:text-pink-500 transition-colors">cat</a></li> <li><a href="/about" class="text-gray-700 hover:text-pink-500 transition-colors">about</a></li> </ul> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-pink-200 mt-16 bg-white/50"> <div class="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500"> <p>made with <span class="text-pink-400">♥</span> by rowan</p> </div> </footer></body></html>`;
}, "/Users/rowan/amelierowan.dev/src/components/ui/Layout.astro", void 0);

export { $$Layout as $ };
