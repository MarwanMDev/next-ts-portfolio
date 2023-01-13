import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { GetStaticProps } from 'next';
import {
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
};

export default function Home({
  pageInfo,
  socials,
  projects,
  experiences,
  skills,
}: Props) {
  return (
    <div className="bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF0266]/80">
      <Head>
        <title>{pageInfo?.name} | Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            src={urlFor(pageInfo?.heroImage).url()}
            alt="profile"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      skills,
    },
    revalidate: 10,
  };
};
