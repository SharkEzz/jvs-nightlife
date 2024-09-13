import { db } from '../db';
import * as schema from '../schema';
import { faker } from '@faker-js/faker/locale/fr';

export async function loadUsers() {
  const fakeUsers = Array.from({ length: 5 }).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    playerName: faker.internet.displayName(),
    estJVS: false,
  }));

  await db.insert(schema.user).values([
    {
      firstName: 'Tristan',
      lastName: 'Dida',
      playerName: 'Didou',
      estJVS: true,
    },
    {
      firstName: 'Mathis',
      lastName: 'Ait Braham',
      playerName: 'Thisma',
      estJVS: true,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Raguet',
      playerName: 'Nico',
      estJVS: true,
    },
    {
      firstName: 'Julien',
      lastName: 'Quillet',
      playerName: 'Veloman',
      estJVS: true,
    },
    ...fakeUsers,
  ]);
}
