'use client';

import { FormControl } from '@/components/FormControl';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';
import { createUser } from './createUser';

const initialState = {
  estJVS: false,
  firstName: '',
  lastName: '',
  playerName: '',
};

export function UserModal() {
  const [state, formAction] = useFormState(createUser, initialState);

  console.log(state);

  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer un nouveau joueur</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
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
            <Button type="submit">Valider</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
