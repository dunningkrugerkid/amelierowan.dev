import type { APIRoute } from 'astro';
import { getRecentTracks } from '../../lib/lastfm';

export const GET: APIRoute = async () => {
  try {
    const apiKey = import.meta.env.PUBLIC_LAST_FM_API_KEY;
    const username = import.meta.env.PUBLIC_LAST_FM_USERNAME;

    if (!apiKey || !username) {
      return new Response(
        JSON.stringify({ error: 'Last.fm API key or username not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Try to get recent tracks from Last.fm
    const tracks = await getRecentTracks(apiKey, username, 1);

    if (tracks && tracks.length > 0) {
      const track = tracks[0];
      const isNowPlaying = !track.date; // If no date, it's currently playing

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
      JSON.stringify({ source: 'none', isPlaying: false, message: 'No recent tracks' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch now playing' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};