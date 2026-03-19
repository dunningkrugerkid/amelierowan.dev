import type { APIRoute } from 'astro';
import { getTopArtists } from '../../lib/lastfm';

export const GET: APIRoute = async ({ url }) => {
  try {
    const apiKey = import.meta.env.PUBLIC_LAST_FM_API_KEY;
    const username = import.meta.env.PUBLIC_LAST_FM_USERNAME;

    if (!apiKey || !username) {
      return new Response(
        JSON.stringify({ error: 'Last.fm API key or username not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const limit = parseInt(url.searchParams.get('limit') || '12');
    const period = (url.searchParams.get('period') || '7day') as
      | '7day'
      | '1month'
      | '3month'
      | '6month'
      | '12month'
      | 'overall';

    const artists = await getTopArtists(apiKey, username, limit, period);

    return new Response(JSON.stringify(artists), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching top artists:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch top artists' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};