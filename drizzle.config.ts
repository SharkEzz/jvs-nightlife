import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/server/database/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './sqlite.db',
  },
});
