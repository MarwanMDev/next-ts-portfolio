import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '../public/marwan.png';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="marwan.png"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of MDev</h4>
        <p className="font-bold text-2xl mt-1">MDev</p>
        <div className="flex space-x-2 my-2">
          {[1, 2, 3].map((index) => (
            <Image
              key={index}
              className="h-10 w-10 rounded-full"
              src={profileImage}
              alt="Picture of the author"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gary-300">
          Started July 2019 - Ended July 2021
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Experience points Experience points Experience points
            Experience points{' '}
          </li>
          <li>
            Experience points Experience points Experience points
            Experience points{' '}
          </li>
          <li>
            Experience points Experience points Experience points
            Experience points{' '}
          </li>
          <li>
            Experience points Experience points Experience points
            Experience points{' '}
          </li>
          <li>
            Experience points Experience points Experience points
            Experience points{' '}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
