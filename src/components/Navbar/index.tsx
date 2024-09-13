import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-medium text-xl">
            JVS Nightlife
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/sessions">Sessions</Link>
            </li>
          </ul>
          <Button className="ml-auto">Nouvelle session</Button>
        </div>
      </div>
    </nav>
  );
}
