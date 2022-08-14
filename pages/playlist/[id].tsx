import { GradientBackground } from '../../components/GradientBackground';
import { HeaderCard } from '../../components/HeaderCard';
import { validateToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

const Playlist = ({ playlist, color }) => {
  return (
    <GradientBackground color={color}>
      <HeaderCard
        color="grey"
        title={playlist.name}
        image={`http://picsum.photos/400?random=${playlist.id}`}
        subtitle="Playlist"
        description={`${playlist.songs.length} songs`}
      />
    </GradientBackground>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const playlist = await prisma.playlist.findFirst({
    where: {
      id: +query.id,
      userId: id
    },
    select: {
      id: true,
      name: true,
      userId: true,
      songs: {
        select: {
          id: true,
          name: true,
          duration: true,
          artist: {
            select: {
              name: true,
              id: true
            }
          }
        }
      }
    }
  });

  const getBGColor = () => {
    const colors = [
      'red',
      'green',
      'blue',
      'orange',
      'purple',
      'gray',
      'teal',
      'yellow'
    ];
    return (
      colors[playlist.id - 1] ||
      colors[Math.floor(Math.random() * colors.length)]
    );
  };

  return {
    props: { playlist, color: getBGColor() }
  };
};
export default Playlist;
