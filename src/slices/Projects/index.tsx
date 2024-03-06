'use client';

import { useState } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

const Projects = ({ slice }: ProjectsProps): JSX.Element => {
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
    <section className="lg:first-of-type:mt-0 lg:ml-[10%] ml-0 w-[90%] first-of-type:ml-0 first-of-type:mt-14">
      <h2
        className={`lg:ml-24 mb-6 ml-48 mt-9 cursor-pointer text-lg transition-[color] duration-300 ease-in-out hover:text-zinc-400 xs:text-xl ${openArticle && 'text-zinc-400'}`}
        onClick={handleTitleClick}
      >
        {title}
      </h2>
      <ul
        className={`lg:duration-500 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openArticle && 'max-h-[1000px] pb-24'}`}
      >
        {slice.items.map((item, index) => {
          return (
            <li key={index} className="lg:w-[80%] relative mb-3 w-full">
              <h3
                className={`flex cursor-pointer uppercase hover:text-zinc-400 ${openWebsite === index + 1 && 'text-zinc-400'}`}
                onClick={() => handleWebsiteClick(index)}
              >
                <span className="mr-14">{index + 1}</span>{' '}
                <span>{item.name}</span>
              </h3>

              <div
                className={`max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openWebsite === index + 1 && 'my-10 max-h-[1000px]'}`}
              >
                <div className="lg:w-[55%] w-full">
                  <PrismicRichText
                    field={item.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="indent-14 first-of-type:indent-0">
                          {children}
                        </p>
                      ),
                    }}
                  />
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="my-5 block indent-14"
                    >
                      {item.link}
                    </a>
                  )}
                </div>

                {openWebsite === index + 1 && (
                  <iframe
                    src={`https://player.vimeo.com/video/${item.video}?background=1`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="lg:absolute lg:right-0 lg:top-0 lg:h-72 lg:w-[40%] lg:my-0 my-4 w-full"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
