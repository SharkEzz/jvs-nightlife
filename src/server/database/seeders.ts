import { client, db } from './db';
import * as schema from './schema';

// Maps
await db
  .insert(schema.map)
  .values([{ name: 'Atlantis' }, { name: 'Lunar Outpost' }, { name: 'Helios' }, { name: 'The Cliff' }]);

// Users
await db.insert(schema.user).values([
  {
    firstName: 'Tristan',
    lastName: 'Dida',
    playerName: 'Didou',
  },
  {
    firstName: 'Mathis',
    lastName: 'Ait Braham',
    playerName: 'Thisma',
  },
  {
    firstName: 'Nicolas',
    lastName: 'Raguet',
    playerName: 'Nico',
  },
  {
    firstName: 'Toto',
    lastName: 'Titi',
    playerName: 'Toto',
  },
]);

// Sessions
await db.insert(schema.session).values({ date: new Date('2024-09-11 20:20:00') });

// Sessions Users
await db.insert(schema.sessionTeamUser).values([
  {
    userId: 1,
    sessionId: 1,
    team: 'blue',
  },
  {
    userId: 2,
    sessionId: 1,
    team: 'blue',
  },
  {
    userId: 3,
    sessionId: 1,
    team: 'red',
  },
  {
    userId: 4,
    sessionId: 1,
    team: 'red',
  },
]);

// Games
await db.insert(schema.game).values([{ sessionId: 1, mode: 'domination', mapId: 1 }]);

// Games results
await db.insert(schema.userGameResult).values([
  {
    gameId: 1,
    userId: 1,
    kill: 10,
    death: 5,
    assist: 5,
    score: 25,
  },
  {
    gameId: 1,
    userId: 2,
    kill: 5,
    death: 10,
    assist: 5,
    score: 5,
  },
  {
    gameId: 1,
    userId: 3,
    kill: 5,
    death: 5,
    assist: 10,
    score: 20,
  },
  {
    gameId: 1,
    userId: 4,
    kill: 5,
    death: 5,
    assist: 10,
    score: 20,
  },
]);

await client.end();
