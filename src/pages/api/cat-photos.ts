import type { APIRoute } from 'astro';
import { getCatPhotos } from '../../lib/cloudinary';

export const GET: APIRoute = async ({ url }) => {
  try {
    const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
      return new Response(
        JSON.stringify({
          error: 'Cloudinary not configured',
          photos: [],
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const limit = parseInt(url.searchParams.get('limit') || '20');
    const photos = await getCatPhotos(limit);

    return new Response(JSON.stringify(photos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching cat photos:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch cat photos', photos: [] }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};