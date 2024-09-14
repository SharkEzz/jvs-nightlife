'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

export function FormSubmitButton() {
  const status = useFormStatus();

  return (
    <Button type="submit" disabled={status.pending}>
      Valider
    </Button>
  );
}
