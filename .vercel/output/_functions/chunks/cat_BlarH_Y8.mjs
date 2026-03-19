import { c as createComponent } from './astro-component_C4ecrRZu.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from './entrypoint_EyPBh7p7.mjs';
import { $ as $$Layout } from './Layout_DP8js5N1.mjs';
import 'clsx';

const $$CatGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CatGallery;
  const { photos = [], limit = Infinity } = Astro2.props;
  const displayPhotos = photos.slice(0, limit);
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${displayPhotos.map((photo) => renderTemplate`<div class="aspect-square rounded-lg overflow-hidden bg-gray-100 group"> ${photo.url ? renderTemplate`<img${addAttribute(photo.url, "src")}${addAttribute(photo.alt, "alt")} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">` : renderTemplate`<div class="w-full h-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"> <span class="text-gray-400">${photo.alt}</span> </div>`} </div>`)} </div>`;
}, "/Users/rowan/amelierowan.dev/src/components/content/CatGallery.astro", void 0);

const $$Cat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Cat | Rowan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-4">My Cat</h1> <p class="text-gray-600 mb-8">
Here's my cat! Photos powered by Cloudinary.
</p> <!--
      To add cat photos:
      1. Upload photos to Cloudinary in the 'cat-photos' folder
      2. The gallery will automatically fetch them
      
      For now, showing placeholder content
    --> ${renderComponent($$result2, "CatGallery", $$CatGallery, { "photos": [
    { publicId: "cat-photos/cat-1", url: "", alt: "Cat photo 1" },
    { publicId: "cat-photos/cat-2", url: "", alt: "Cat photo 2" },
    { publicId: "cat-photos/cat-3", url: "", alt: "Cat photo 3" },
    { publicId: "cat-photos/cat-4", url: "", alt: "Cat photo 4" },
    { publicId: "cat-photos/cat-5", url: "", alt: "Cat photo 5" },
    { publicId: "cat-photos/cat-6", url: "", alt: "Cat photo 6" }
  ] })} <div class="mt-8 p-6 bg-gray-50 rounded-lg"> <h2 class="text-lg font-semibold mb-2">Want to add photos?</h2> <p class="text-gray-600 text-sm">
Upload your cat photos to Cloudinary in the <code class="bg-gray-200 px-1 rounded">cat-photos</code> folder
        and they'll automatically appear here!
</p> </div> </main> ` })}`;
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
