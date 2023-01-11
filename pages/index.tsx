import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <div className="bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF0266]/80">
      <Head>
        <title>Marwan Mostafa | Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            src="marwan.png"
            alt="profile"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      </footer>
    </div>
  );
}
