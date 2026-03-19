const API_BASE = 'https://ws.audioscrobbler.com/2.0/';

export interface LastFmTrack {
  name: string;
  artist: { '#text': string; mbid?: string };
  album?: { '#text': string; mbid?: string };
  image: { '#text': string; size: string }[];
  playcount?: string;
  url: string;
  date?: { uts: string; '#text': string };
}

export interface LastFmArtist {
  name: string;
  playcount: string;
  image: { '#text': string; size: string }[];
  url: string;
}

async function fetchLastFm(
  method: string,
  apiKey: string,
  params: Record<string, string>
): Promise<unknown> {
  const searchParams = new URLSearchParams({
    method,
    api_key: apiKey,
    format: 'json',
    ...params,
  });

  const response = await fetch(`${API_BASE}?${searchParams}`);

  if (!response.ok) {
    throw new Error(`Last.fm API error: ${response.status}`);
  }

  return response.json();
}

export async function getTopTracks(
  apiKey: string,
  username: string,
  limit = 12,
  period: '7day' | '1month' | '3month' | '6month' | '12month' | 'overall' = '7day'
): Promise<LastFmTrack[]> {
  const data = (await fetchLastFm(apiKey, 'user.gettoptracks', {
    user: username,
    limit: String(limit),
    period,
  })) as { toptracks: { track: LastFmTrack[] } };

  return data.toptracks?.track || [];
}

export async function getTopArtists(
  apiKey: string,
  username: string,
  limit = 12,
  period: '7day' | '1month' | '3month' | '6month' | '12month' | 'overall' = '7day'
): Promise<LastFmArtist[]> {
  const data = (await fetchLastFm(apiKey, 'user.gettopartists', {
    user: username,
    limit: String(limit),
    period,
  })) as { topartists: { artist: LastFmArtist[] } };

  return data.topartists?.artist || [];
}

export async function getRecentTracks(
  apiKey: string,
  username: string,
  limit = 5
): Promise<LastFmTrack[]> {
  const data = (await fetchLastFm(apiKey, 'user.getrecenttracks', {
    user: username,
    limit: String(limit),
  })) as { recenttracks: { track: LastFmTrack[] } };

  return data.recenttracks?.track || [];
}

export async function getArtistInfo(
  apiKey: string,
  artist: string
): Promise<LastFmArtist | null> {
  const data = (await fetchLastFm(apiKey, 'artist.getinfo', {
    artist,
  })) as { artist: LastFmArtist };

  return data.artist || null;
}