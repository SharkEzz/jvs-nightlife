import pg from 'pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

export const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();
export const db = drizzle(client, { schema });
