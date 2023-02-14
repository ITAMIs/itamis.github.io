import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';
import { Footer, Navbar } from '../components';
import { About, Contact, Explore, Feedback, GetStarted, Hero, Insights, Skills, WhatsNew, World } from '../sections';
import EndText from '../sections/EndText';



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
    <Contact/>
    <Footer />
  </div>
);

export default Home;