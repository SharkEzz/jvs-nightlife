import { db } from '../server/database/db';

export default async function Home() {
  const users = await db.query.user.findMany();
  console.log(users);

  return <div>coucou</div>;
}
