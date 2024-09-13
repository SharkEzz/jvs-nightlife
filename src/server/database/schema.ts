import { integer, pgEnum, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  playerName: varchar('player_name').notNull(),
  profileUrl: varchar('profile_url'),
});

export const map = pgTable('map', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull().unique(),
});

export const session = pgTable('session', {
  id: serial('id').primaryKey(),
  date: timestamp('date').notNull(),
});

export const sessionTeamNumberEnum = pgEnum('session_team_number', ['blue', 'red']);
export const sessionTeamUser = pgTable('session_team_user', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id),
  sessionId: integer('session_id')
    .notNull()
    .references(() => session.id),
  team: sessionTeamNumberEnum('team').notNull(),
});

export const gameModeEnum = pgEnum('game_mode', ['domination', 'team_deathmatch']); // TODO: verify
export const game = pgTable('game', {
  id: serial('id').primaryKey(),
  mode: gameModeEnum('mode').notNull(),
  mapId: integer('map_id')
    .notNull()
    .references(() => map.id),
  sessionId: integer('session_id')
    .notNull()
    .references(() => session.id),
});

export const userGameResult = pgTable('user_game_result', {
  id: serial('id').primaryKey(),
  gameId: integer('game_id')
    .notNull()
    .references(() => game.id),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id),
  kill: integer('kill').notNull(),
  death: integer('death').notNull(),
  assist: integer('assist').notNull(),
  score: integer('score').notNull(),
});
