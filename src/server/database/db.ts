import { loadEnv } from '@/utils/loadEnv';
import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

loadEnv();

export const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();
export const db = drizzle(client, { schema });
