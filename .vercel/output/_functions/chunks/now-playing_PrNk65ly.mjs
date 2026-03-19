import { $ } from 'zx';
import { g as getRecentTracks } from './lastfm_C2kIyQ0v.mjs';

async function getLocalNowPlaying() {
  if (process.platform !== "darwin") {
    return null;
  }
  try {
    const result = await $`osascript -l JavaScript -e '
      const Music = Application("Music");
      
      try {
        Music.includeStandardAdditions = true;
        
        if (!Music.running()) {
          return JSON.stringify({ error: "Music app not running" });
        }
        
        const currentTrack = Music.currentTrack;
        const isPlaying = Music.playerState() === "playing";
        
        const track = {
          title: currentTrack.name(),
          artist: currentTrack.artist(),
          album: currentTrack.album(),
          duration: currentTrack.duration(),
          isPlaying: isPlaying
        };
        
        return JSON.stringify(track);
      } catch (e) {
        return JSON.stringify({ error: e.toString() });
      }
    '`;
    const output = result.stdout.trim();
    const data = JSON.parse(output);
    if (data.error) {
      console.error("JXA error:", data.error);
      return null;
    }
    return {
      title: data.title || "Unknown",
      artist: data.artist || "Unknown",
      album: data.album || "",
      isPlaying: data.isPlaying || false
    };
  } catch (error) {
    console.error("Error getting local now playing:", error);
    return null;
  }
}

const GET = async () => {
  try {
    const local = await getLocalNowPlaying();
    if (local) {
      return new Response(
        JSON.stringify({
          source: "local",
          ...local
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
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
      JSON.stringify({
        source: "none",
        isPlaying: false,
        message: "no recent tracks found"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return new Response(
      JSON.stringify({
        error: "failed to fetch now playing",
        source: "none",
        isPlaying: false
      }),
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
