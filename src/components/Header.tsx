import Link from 'next/link';
import { createClient } from '@/prismicio';

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle('header');
  const { name, title, mail } = header.data;

  return (
    <header className="sm:flex-row mb-10 flex flex-col justify-between gap-4 text-lg xs:text-xl">
      <h1>
        <Link href="/">
          <span>{name}</span> <span>{title}</span>
        </Link>
      </h1>
      <Link className="self-end" href={`mailto:${mail}`}>
        {mail}
      </Link>
    </header>
  );
}
