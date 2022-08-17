export const getNextSong = (currentSong: number, lastSong: number): number =>
  currentSong === lastSong ? 0 : currentSong + 1;

export const getPreviousSong = (
  currentSong: number,
  lastSong: number
): number => (currentSong > 0 ? currentSong - 1 : lastSong);

export const getRandomSong = (totalSongs: number): number =>
  Math.floor(Math.random() * totalSongs);
