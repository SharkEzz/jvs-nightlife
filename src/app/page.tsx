import { PageLayout } from '@/components/PageLayout';
import { StatCard } from '@/components/StatCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { db } from '@/server/database/db';
import * as schema from '@/server/database/schema';
import { count, countDistinct, desc, eq, sum } from 'drizzle-orm';

export default async function Home() {
  const [{ totalSessions }] = await db.select({ totalSessions: count() }).from(schema.session);

  const [gameAndKillStats] = await db
    .select({ totalGames: countDistinct(schema.game.id), totalKills: sum(schema.userGameResult.kill) })
    .from(schema.game)
    .leftJoin(schema.userGameResult, eq(schema.userGameResult.gameId, schema.game.id));

  const totalGames = gameAndKillStats?.totalGames ?? 0;
  const avgKillsPerGame = totalGames > 0 ? Math.round(Number(gameAndKillStats?.totalKills ?? 0) / totalGames) : 0;

  const [bestScorePlayer] = await db
    .select({ playerName: schema.user.playerName, totalScore: sum(schema.userGameResult.score) })
    .from(schema.userGameResult)
    .innerJoin(schema.user, eq(schema.userGameResult.userId, schema.user.id))
    .groupBy(schema.user.id)
    .orderBy(desc(sum(schema.userGameResult.score)))
    .limit(1);

  const [mostKillsPlayer] = await db
    .select({ playerName: schema.user.playerName, totalKills: sum(schema.userGameResult.kill) })
    .from(schema.userGameResult)
    .innerJoin(schema.user, eq(schema.userGameResult.userId, schema.user.id))
    .groupBy(schema.user.id)
    .orderBy(desc(sum(schema.userGameResult.kill)))
    .limit(1);

  const recentSessions = await db
    .select({ id: schema.session.id, date: schema.session.date })
    .from(schema.session)
    .orderBy(desc(schema.session.date))
    .limit(10);

  return (
    <>
      <PageLayout title="Stats globales">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <StatCard title="Sessions totales" value={totalSessions} />
          <StatCard title="Parties jouées" value={totalGames} />
          <StatCard title="Kills moyen par partie" value={avgKillsPerGame} />
          <StatCard title="Joueur ayant le meilleur score" value={bestScorePlayer?.playerName ?? '-'} />
          <StatCard title="Joueur ayant le plus de kills" value={mostKillsPlayer?.playerName ?? '-'} />
        </div>
      </PageLayout>
      <PageLayout title="Dernières sessions">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSessions.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.id}</TableCell>
                <TableCell>{new Date(s.date).toLocaleString('fr-FR')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PageLayout>
    </>
  );
}
