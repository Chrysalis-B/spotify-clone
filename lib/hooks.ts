import useSWR from 'swr';
import fetcher from './fetcher';

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher);

  const playlists = data?.map(playlist => ({
    ...playlist,
    route: `/playlist/${playlist.id}`
  }));

  return {
    playlists: playlists || [], // TODO: add type for playlist
    isLoading: !data && !error,
    isError: error
  };
};
