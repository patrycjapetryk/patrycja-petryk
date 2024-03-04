import Link from 'next/link';
import { createClient } from '@/prismicio';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');

  return (
    <footer className="fixed bottom-4 right-[20%]">
      <ul className="flex gap-2 text-lg xs:text-xl">
        {footer.data.menu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item?.link || '#'} target="_blank">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
