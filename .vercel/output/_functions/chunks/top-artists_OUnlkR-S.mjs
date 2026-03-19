import { a as getTopArtists } from './lastfm_C2kIyQ0v.mjs';

const GET = async ({ url }) => {
  try {
    const apiKey = "1e6ce2f42c08de643c35b35ce6ecaa21";
    const username = "chickoftheseus";
    if (!apiKey || !username) ;
    const limit = parseInt(url.searchParams.get("limit") || "12");
    const period = url.searchParams.get("period") || "7day";
    const artists = await getTopArtists(apiKey, username, limit, period);
    return new Response(JSON.stringify(artists), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch top artists" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
