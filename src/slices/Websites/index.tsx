'use client';

import { useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type WebsitesProps = SliceComponentProps<Content.WebsitesSlice>;

const Websites = ({ slice }: WebsitesProps): JSX.Element => {
  const [openArticle, setOpenArticle] = useState(false);
  const [openWebsite, setOpenWebsite] = useState(0);

  const { title } = slice.primary;

  const handleTitleClick = () => {
    setOpenArticle(!openArticle);

    if (openWebsite !== 0) {
      setOpenWebsite(0);
    }
  };

  const handleWebsiteClick = (index: number) => {
    if (openWebsite === index + 1) {
      setOpenWebsite(0);
      return;
    }
    setOpenWebsite(index + 1);
  };

  return (
    <section className="lg:first-of-type:mt-0 lg:ml-[60%] relative ml-0 first-of-type:ml-0 first-of-type:mt-14">
      <h2
        className={`lg:ml-24 mb-6 ml-14 mt-9 cursor-pointer text-lg transition-[color] duration-300 ease-in-out hover:text-zinc-400 xs:text-xl ${openArticle && 'text-zinc-400'}`}
        onClick={handleTitleClick}
      >
        {title}
      </h2>
      <div
        className={`lg:duration-500 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openArticle && 'max-h-[1000px]'}`}
      >
        <ol>
          {slice.items.map((item, index) => {
            return (
              <li key={index} className="mb-3">
                <h3
                  className={`flex cursor-pointer uppercase hover:text-zinc-400 ${openWebsite === index + 1 && 'text-zinc-400'}`}
                  onClick={() => handleWebsiteClick(index)}
                >
                  <span className="mr-14">{index + 1}</span>{' '}
                  <span>{item.name}</span>
                </h3>

                {openWebsite === index + 1 && (
                  <>
                    <PrismicNextImage
                      className="lg:-top-8 lg:right-6 lg:w-52 absolute -top-16 right-2 w-48"
                      field={item.image}
                      imgixParams={{ q: 50 }}
                    />

                    <div className="lg:-left-28 absolute -bottom-24 left-0 w-44">
                      <iframe
                        src={`https://player.vimeo.com/video/${item.video}?background=1`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full"
                      />
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Websites;
