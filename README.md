# amelierowan.dev

Personal website for Rowan - music, code, and cats.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 6.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Deployment**: [Vercel](https://vercel.com/)
- **Music Data**: [Last.fm API](https://www.last.fm/api)
- **Images**: [Cloudinary](https://cloudinary.com/)

## Features

- **Music Integration**: Displays top tracks and artists from Last.fm
- **NowPlaying Widget**: Shows what's currently playing (Last.fm)
- **Cat Gallery**: Photo gallery powered by Cloudinary
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Server-Side Rendering**: Vercel adapter for SSR

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── content/       # Content components (About, CatGallery)
│   │   ├── music/         # Music components (NowPlaying, TopTracks)
│   │   └── ui/            # UI components (Layout)
│   ├── lib/
│   │   ├── cloudinary.ts  # Cloudinary helper functions
│   │   ├── config.ts      # Site configuration
│   │   └── lastfm.ts      # Last.fm API client
│   ├── pages/
│   │   ├── api/           # API endpoints
│   │   ├── about.astro
│   │   ├── cat.astro
│   │   ├── index.astro
│   │   └── music.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
# Last.fm
PUBLIC_LAST_FM_API_KEY=your_last_fm_api_key
LAST_FM_SECRET=your_last_fm_secret
PUBLIC_LAST_FM_USERNAME=your_last_fm_username

# Cloudinary
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Getting Credentials

1. **Last.fm**: Create an API account at https://www.last.fm/api/account/create
2. **Cloudinary**: Sign up at https://cloudinary.com and get credentials from dashboard

## Commands

| Command | Action |
|:--------|:-------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

Push to GitHub and connect to Vercel. Set environment variables in Vercel dashboard.

## Adding Cat Photos

1. Upload photos to Cloudinary in the `cat-photos` folder
2. They'll automatically appear on the /cat page

## License

MIT