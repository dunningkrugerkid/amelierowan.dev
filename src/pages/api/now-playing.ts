import type { APIRoute } from 'astro';
import { getLocalNowPlaying } from '../../lib/mcp';

export const GET: APIRoute = async () => {
  try {
    // Try local Apple Music (only works on macOS when Music app is running)
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

    return new Response(
      JSON.stringify({
        source: 'none',
        isPlaying: false,
        message: 'no music playing',
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