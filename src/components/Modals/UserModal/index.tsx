import { FormControl } from '@/components/FormControl';
import { FormSubmitButton } from '@/components/FormSubmitButton';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { db } from '@/server/database/db';
import * as schema from '@/server/database/schema';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createUserSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis'),
  lastName: z.string().min(1, 'Le nom est requis'),
  playerName: z.string().min(1, 'Le pseudo est requis'),
  profileUrl: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().url("L'URL du profil est invalide").optional(),
  ),
  estJVS: z.preprocess((val) => val === 'on', z.boolean()),
});

export function UserModal() {
  const createUser = async (formData: FormData) => {
    'use server';

    const parsed = createUserSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      throw new Error('Données invalides');
    }

    const result = await db.insert(schema.user).values(parsed.data).returning();

    revalidatePath('/joueurs');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Nouveau joueur</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer un nouveau joueur</DialogTitle>
        </DialogHeader>
        <form action={createUser} className="space-y-4">
          <div className="flex gap-4">
            <FormControl>
              <Label htmlFor="firstName">Prénom*</Label>
              <Input id="firstName" type="text" name="firstName" required />
            </FormControl>
            <FormControl>
              <Label htmlFor="lastName">Nom*</Label>
              <Input id="lastName" type="text" name="lastName" required />
            </FormControl>
          </div>
          <FormControl>
            <Label htmlFor="playerName">Pseudo*</Label>
            <Input id="playerName" type="text" name="playerName" required />
          </FormControl>
          <FormControl>
            <Label htmlFor="profileUrl">URL du profil</Label>
            <Input type="url" id="profileUrl" name="profileUrl" />
          </FormControl>
          <FormControl>
            <Checkbox id="estJVS" name="estJVS" />
            <Label htmlFor="estJVS">Employé de JVS ?</Label>
          </FormControl>
          <DialogFooter>
            <FormSubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
