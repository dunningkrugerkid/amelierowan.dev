import { $ } from 'zx';

export interface NowPlaying {
  title: string;
  artist: string;
  album: string;
  artwork?: string;
  isPlaying: boolean;
}

// Query local Apple Music app via JXA (JavaScript for Automation)
export async function getLocalNowPlaying(): Promise<NowPlaying | null> {
  // Only works on macOS
  if (process.platform !== 'darwin') {
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
      console.error('JXA error:', data.error);
      return null;
    }

    return {
      title: data.title || 'Unknown',
      artist: data.artist || 'Unknown',
      album: data.album || '',
      isPlaying: data.isPlaying || false,
    };
  } catch (error) {
    // If Music app isn't available or other error, return null
    console.error('Error getting local now playing:', error);
    return null;
  }
}