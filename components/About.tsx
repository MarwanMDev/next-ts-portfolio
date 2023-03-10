import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl shadow-sm">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-65 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#FF0266]/50">
            little
          </span>{' '}
          background
        </h4>
        <p className="text-base text-justify">
          Hello! {`I'm`} Marwan, and {`I've`} been the Manager of
          Ancillary Revenue in EGYPTAIR for the past 16 months. Ever
          since I received my degree in computer science, {`I've`}{' '}
          been really interested in web development.
        </p>
        {''}
        <p>
          {`I'm`} thrilled to utilize my web development passion and
          past professional experience to continue creating unique
          products for the travel industry.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
