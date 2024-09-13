import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db, client } from './db';

migrate(db, { migrationsFolder: './drizzle' });
client.close();
