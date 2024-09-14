import Link from 'next/link';
import { SessionModal } from '../Modals/SessionModal';

const LINKS = [
  {
    href: '/',
    name: 'Accueil',
  },
  {
    href: '/sessions',
    name: 'Sessions',
  },
  {
    href: '/joueurs',
    name: 'Joueurs',
  },
] as const;

export function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-medium text-xl">
            JVS Nightlife
          </Link>
          <ul className="flex gap-4">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <SessionModal className="ml-auto" />
        </div>
      </div>
    </nav>
  );
}
