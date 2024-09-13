import { db } from '../db';
import * as schema from '../schema';

export async function loadMaps() {
  await db
    .insert(schema.map)
    .values([{ name: 'Atlantis' }, { name: 'Lunar Outpost' }, { name: 'Helios' }, { name: 'The Cliff' }]);
}
