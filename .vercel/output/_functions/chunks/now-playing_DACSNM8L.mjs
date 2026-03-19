import { g as getRecentTracks } from './lastfm_C2kIyQ0v.mjs';

const GET = async () => {
  try {
    const apiKey = "1e6ce2f42c08de643c35b35ce6ecaa21";
    const username = "chickoftheseus";
    if (!apiKey || !username) ;
    const tracks = await getRecentTracks(apiKey, username, 1);
    if (tracks && tracks.length > 0) {
      const track = tracks[0];
      const isNowPlaying = !track.date;
      return new Response(
        JSON.stringify({
          source: "lastfm",
          title: track.name,
          artist: track.artist["#text"],
          album: track.album?.["#text"] || "",
          artwork: track.image[3]?.["#text"] || track.image[2]?.["#text"] || "",
          url: track.url,
          isPlaying: isNowPlaying
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ source: "none", isPlaying: false, message: "No recent tracks" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch now playing" }),
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
