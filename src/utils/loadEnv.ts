import { z } from 'zod';
import dotenv from 'dotenv';

let isLoaded = false;

export const envSchema = z.object({
  DATABASE_URL: z.string(),
});
export type Env = z.infer<typeof envSchema>;

export function loadEnv(): void {
  if (isLoaded) {
    console.log('Environment variables already loaded, skipping...');
    return;
  }

  dotenv.config();
  envSchema.parse(process.env);
  isLoaded = true;
}
