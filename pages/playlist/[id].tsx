import { GradientBackground } from '../../components/GradientBackground';
import { HeaderCard } from '../../components/HeaderCard';
import { validateToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

const Playlist = ({ playlist }) => {
  return (
    <GradientBackground color="gray">
      <HeaderCard
        color="grey"
        title={playlist.name}
        image="http://placekitten.com/300/300"
        subtitle="Playlist"
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

  return {
    props: { playlist }
  };
};
export default Playlist;
