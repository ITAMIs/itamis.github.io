'use client';

import { Footer } from '../components';
import { About, Contact, Explore, GetStarted, Hero, Skills, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <Skills />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Contact />
    <Footer />
  </div>
);

export default Home;
