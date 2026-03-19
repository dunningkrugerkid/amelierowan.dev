const API_BASE = "https://ws.audioscrobbler.com/2.0/";
async function fetchLastFm(method, apiKey, params) {
  const searchParams = new URLSearchParams({
    method,
    api_key: apiKey,
    format: "json",
    ...params
  });
  const response = await fetch(`${API_BASE}?${searchParams}`);
  if (!response.ok) {
    throw new Error(`Last.fm API error: ${response.status}`);
  }
  return response.json();
}
async function getTopTracks(apiKey, username, limit = 12, period = "7day") {
  const data = await fetchLastFm(apiKey, "user.gettoptracks", {
    user: username,
    limit: String(limit),
    period
  });
  return data.toptracks?.track || [];
}
async function getTopArtists(apiKey, username, limit = 12, period = "7day") {
  const data = await fetchLastFm(apiKey, "user.gettopartists", {
    user: username,
    limit: String(limit),
    period
  });
  return data.topartists?.artist || [];
}
async function getRecentTracks(apiKey, username, limit = 5) {
  const data = await fetchLastFm(apiKey, "user.getrecenttracks", {
    user: username,
    limit: String(limit)
  });
  return data.recenttracks?.track || [];
}

export { getTopArtists as a, getTopTracks as b, getRecentTracks as g };
