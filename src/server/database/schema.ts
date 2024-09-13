import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  id: integer('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  playerName: text('player_name').notNull(),
  profileUrl: text('profile_url'),
  estJVS: integer('est_jvs', { mode: 'boolean' }).notNull(),
});
export type SelectUser = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;

export const map = sqliteTable('map', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
});

export const session = sqliteTable('session', {
  id: integer('id').primaryKey(),
  date: integer('date', { mode: 'timestamp_ms' }).notNull(),
});

export const sessionTeamUser = sqliteTable('session_team_user', {
  id: integer('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id),
  sessionId: integer('session_id')
    .notNull()
    .references(() => session.id),
  team: text('team', { enum: ['blue', 'red'] }).notNull(),
});

export const game = sqliteTable('game', {
  id: integer('id').primaryKey(),
  mode: text('mode', { enum: ['domination', 'team_deathmatch'] }).notNull(), // TODO: verify modes
  mapId: integer('map_id')
    .notNull()
    .references(() => map.id),
  sessionId: integer('session_id')
    .notNull()
    .references(() => session.id),
});

export const userGameResult = sqliteTable('user_game_result', {
  id: integer('id').primaryKey(),
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
