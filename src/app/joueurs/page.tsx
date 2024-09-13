import { UserModal } from '@/components/Modals/UserModal';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { db } from '@/server/database/db';
import Link from 'next/link';

export default async function Joueurs() {
  const users = await db.query.user.findMany();

  return (
    <PageLayout title="Joueurs" extra={<Button variant="secondary">Nouveau joueur</Button>}>
      <UserModal />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Prénom & Nom</TableHead>
            <TableHead>Pseudo</TableHead>
            <TableHead>Est JVS ?</TableHead>
            <TableHead>KDA moyen</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.id}</TableCell>
              <TableCell>
                {u.firstName} {u.lastName}
              </TableCell>
              <TableCell>
                {u.profileUrl ? (
                  <Link href={u.profileUrl} className="text-blue-300 underline">
                    {u.playerName}
                  </Link>
                ) : (
                  u.playerName
                )}
              </TableCell>
              <TableCell>{u.estJVS ? 'Oui' : 'Non'}</TableCell>
              <TableCell>TODO</TableCell>
              <TableCell>TODO</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageLayout>
  );
}
