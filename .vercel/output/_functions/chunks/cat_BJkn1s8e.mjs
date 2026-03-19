import { c as createComponent } from './astro-component_CM2WGPh_.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_D27yDQgx.mjs';
import { $ as $$Layout } from './Layout_BUZMFOna.mjs';

const $$Cat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Cat | Rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container py-8"> <h1 class="text-4xl font-bold mb-4">My Cat</h1> <p class="text-gray-600 mb-8">
Here's my cat!
</p> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${Array.from({ length: 8 }, (_, i) => renderTemplate`<div class="aspect-square rounded-lg overflow-hidden bg-gray-100 group"> <div class="w-full h-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"> <span class="text-gray-400">Cat photo ${i + 1}</span> </div> </div>`)} </div> </main> ` })}`;
}, "/Users/rowan/amelierowan.dev/src/pages/cat.astro", void 0);

const $$file = "/Users/rowan/amelierowan.dev/src/pages/cat.astro";
const $$url = "/cat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
