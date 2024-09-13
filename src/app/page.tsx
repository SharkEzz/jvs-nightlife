import { PageLayout } from '@/components/PageLayout';
import { StatCard } from '@/components/StatCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default async function Home() {
  return (
    <>
      <PageLayout title="Stats globales">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <StatCard title="Sessions totales" value={50} />
          <StatCard title="Parties jouées" value={50} />
          <StatCard title="Kills moyen par partie" value={50} />
          <StatCard title="Joueur ayant le meilleur score" value={50} />
          <StatCard title="Joueur ayant le plus de kills" value={50} />
        </div>
      </PageLayout>
      <PageLayout title="Dernières parties">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Nombre de joueurs</TableHead>
              <TableHead>Map</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2024-09-11 20:20</TableCell>
              <TableCell>15</TableCell>
              <TableCell>Toto</TableCell>
              <TableCell>2024-09-11 20:20</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PageLayout>
    </>
  );
}
