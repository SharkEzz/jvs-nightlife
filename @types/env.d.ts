import type { Env } from '@/utils/loadEnv';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
