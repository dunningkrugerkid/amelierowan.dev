import type { APIRoute } from 'astro';
import { getLocalNowPlaying } from '../../lib/mcp';
import { getRecentTracks } from '../../lib/lastfm';

export const GET: APIRoute = async () => {
  try {
    // Try local Apple Music first (only works on macOS when Music app is running)
    const local = await getLocalNowPlaying();
    if (local) {
      return new Response(
        JSON.stringify({
          source: 'local',
          ...local,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Fallback to Last.fm
    const apiKey = import.meta.env.PUBLIC_LAST_FM_API_KEY;
    const username = import.meta.env.PUBLIC_LAST_FM_USERNAME;

    if (!apiKey || !username) {
      return new Response(
        JSON.stringify({
          source: 'none',
          isPlaying: false,
          message: 'connect apple music or last.fm to see what\'s playing',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const tracks = await getRecentTracks(apiKey, username, 1);

    if (tracks && tracks.length > 0) {
      const track = tracks[0];
      const isNowPlaying = !track.date;

      return new Response(
        JSON.stringify({
          source: 'lastfm',
          title: track.name,
          artist: track.artist['#text'],
          album: track.album?.['#text'] || '',
          artwork: track.image[3]?.['#text'] || track.image[2]?.['#text'] || '',
          url: track.url,
          isPlaying: isNowPlaying,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        source: 'none',
        isPlaying: false,
        message: 'no recent tracks found',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return new Response(
      JSON.stringify({
        error: 'failed to fetch now playing',
        source: 'none',
        isPlaying: false
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};