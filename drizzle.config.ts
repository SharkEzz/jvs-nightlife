import { loadEnv } from '@/utils/loadEnv';
import { defineConfig } from 'drizzle-kit';

loadEnv();

export default defineConfig({
  schema: './src/server/database/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    schema: 'public',
    table: 'migrations',
  },
});
