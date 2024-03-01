'use client';

import { useState } from 'react';

import type { Content } from '@prismicio/client';
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  const [openArticle, setOpenArticle] = useState(false);

  const { content, title } = slice.primary;

  const handleTitleClick = () => {
    setOpenArticle(!openArticle);
  };

  return (
    <section className="lg:first-of-type:mt-0 ml-[20%] first-of-type:ml-0 first-of-type:mt-14">
      <h2
        className="lg:ml-24 mb-6 ml-14 mt-9 cursor-pointer text-lg xs:text-xl"
        onClick={handleTitleClick}
      >
        {title}
      </h2>

      <div
        className={`lg:duration-500 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openArticle && 'lg:max-h-[200px] max-h-[1000px]'}`}
      >
        <PrismicRichText
          field={content}
          components={{
            paragraph: ({ children }) => (
              <p className="lg:indent-24 indent-14 first-of-type:indent-0">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </section>
  );
}
