import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(artist =>
      prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map(song => ({
              name: song.name,
              duration: song.duration,
              url: song.url
            }))
          }
        }
      })
    )
  );

  const salt = bcrypt.genSaltSync();

  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: bcrypt.hashSync('password', salt)
    }
  });

  const songs = await prisma.song.findMany({});

  await Promise.all(
    [...Array(10).keys()].map(async index => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${index + 1}`,
          user: {
            connect: { id: user.id }
          },
          songs: {
            connect: songs.map(song => ({
              id: song.id
            }))
          }
        }
      });
    })
  );
};

run()
  .catch(e => {
    console.error(e); // TODO implement logger library
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
