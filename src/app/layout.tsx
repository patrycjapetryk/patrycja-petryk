import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="md:py-7 md:pl-8 md:pr-14 max-w-full py-5 pl-5 pr-7 font-sans text-md xs:text-lg">
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
