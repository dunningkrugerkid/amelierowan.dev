export interface FavoriteAlbum {
  title: string;
  artist: string;
  year?: number;
  cover?: string;
  link?: string;
}

export const favoriteAlbums: FavoriteAlbum[] = [
  {
    title: "Brat",
    artist: "Charli XCX",
    year: 2024,
    cover: "https://lastfm.freetls.fastly.net/i/u/300x300/a8b50e5e9e9d4d7e8f0e9e9e9e9e9e9e.png",
  },
  {
    title: "Midnights",
    artist: "Taylor Swift",
    year: 2022,
  },
  {
    title: "SOUR",
    artist: "Olivia Rodrigo",
    year: 2021,
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    year: 2020,
  },
  // Add more albums here!
];

export const favoriteTracks: string[] = [
  "apple - charli xcx",
  "karma - taylor swift",
  "drivers license - olivia rodrigo",
  // Add more tracks here!
];