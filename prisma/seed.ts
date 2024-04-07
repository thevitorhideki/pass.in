import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '1444ef22-4b4b-4087-8924-af68461c8a77',
      title: 'Poker',
      details: 'Evento para jogar poker',
      slug: 'poker',
      maximumAttendees: 10,
    },
  });
}

seed().then(() => {
  console.log('Database seeded');
  prisma.$disconnect;
});
