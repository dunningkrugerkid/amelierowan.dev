import { c as createComponent } from './astro-component_CAtTQstT.mjs';
import 'piccolore';
import { h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate } from './entrypoint_mxYNU8JZ.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Rowan", description = "Personal website - music, code, and my cat" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="https://amelierowan.dev"><title>${title}</title>${renderHead()}</head> <body> <header class="border-b border-gray-200"> <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"> <a href="/" class="text-xl font-bold hover:text-gray-600 transition-colors">
Rowan
</a> <ul class="flex gap-6"> <li><a href="/music" class="hover:text-gray-600 transition-colors">Music</a></li> <li><a href="/cat" class="hover:text-gray-600 transition-colors">Cat</a></li> <li><a href="/about" class="hover:text-gray-600 transition-colors">About</a></li> </ul> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-gray-200 mt-16"> <div class="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Rowan</p> </div> </footer></body></html>`;
}, "/Users/rowan/amelierowan.dev/src/components/ui/Layout.astro", void 0);

export { $$Layout as $ };
