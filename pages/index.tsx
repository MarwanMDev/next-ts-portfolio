import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marwan Mostafa | Portfolio</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}
    </div>
  );
}
