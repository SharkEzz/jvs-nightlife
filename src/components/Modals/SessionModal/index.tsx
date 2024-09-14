import { FormControl } from '@/components/FormControl';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormSubmitButton } from '@/components/FormSubmitButton';
import type { HTMLAttributes } from 'react';

export function SessionModal(props: HTMLAttributes<HTMLButtonElement>) {
  // const createSession = async (formData: FormData) => {
  //   'use server';

  //   const data = Object.fromEntries(formData) as unknown as NewUser; // TODO
  //   const result = await db
  //     .insert(schema.user)
  //     .values({
  //       ...data,
  //       estJVS: data.estJVS ?? false,
  //     })
  //     .returning();

  //   revalidatePath('/joueurs');
  //   return result[0];
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props}>Nouvelle session</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer une nouvelle session</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <FormControl>
            <Label htmlFor="firstName">Date*</Label>
            <Input id="date" type="datetime-local" name="date" required />
          </FormControl>
          TODO: teams
          <DialogFooter>
            <FormSubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
