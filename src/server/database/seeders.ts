import { client, db } from './db';
import * as schema from './schema';
import { loadMaps } from './seeds/maps';
import { loadUsers } from './seeds/users';

for (const table of Object.values(schema)) {
  await db.delete(table);
}

await Promise.all([loadUsers(), loadMaps()]);

client.close();
