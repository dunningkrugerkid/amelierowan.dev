import { v2 } from 'cloudinary';

v2.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
  secure: true
});
async function getCatPhotos(limit = 20) {
  try {
    const result = await v2.search.expression("folder:cat-photos").max_results(limit).execute();
    return result.resources.map((resource) => ({
      publicId: resource.public_id,
      alt: `Cat photo`,
      url: resource.secure_url
    }));
  } catch (error) {
    console.error("Error fetching cat photos from Cloudinary:", error);
    return Array.from({ length: limit }, (_, i) => ({
      publicId: `cat-photos/cat-${i + 1}`,
      alt: `Cat photo ${i + 1}`,
      url: ""
    }));
  }
}

const GET = async ({ url }) => {
  try {
    const cloudName = "your_cloud_name";
    if (!cloudName) ;
    const limit = parseInt(url.searchParams.get("limit") || "20");
    const photos = await getCatPhotos(limit);
    return new Response(JSON.stringify(photos), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching cat photos:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch cat photos", photos: [] }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
