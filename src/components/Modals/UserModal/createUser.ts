'use server';

import type { NewUser } from '@/server/database/schema';
import { db } from '@/server/database/db';
import * as schema from '@/server/database/schema';
import { revalidatePath } from 'next/cache';

export async function createUser(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData) as unknown as NewUser; // TODO
  const result = await db.insert(schema.user).values(data).returning();
  revalidatePath('/joueurs');
  return result[0];
}
