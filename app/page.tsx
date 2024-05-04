import Image from "next/image";
// import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Publications from './components/Publications/Publications';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Volunteering from './components/Volunteering/Volunteering';
import Languages from './components/Languages/Languages';
import StarBackground from './StarBackground';

export default function Home() {
    return (
        <div>
            <div>
                <div className="relative z-50">
                    <div className="absolute">{/* <Navbar /> */}</div>
                </div>
            </div>

            <div>
                <div className="overflow-hidden">
                    <div className="relative">
                        <StarBackground/>
                        <img
                            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
                            width="4377"
                            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
                            // src="/images/stars1.png"
                            alt=""
                        />
                    </div>
                    <div className="hero-section px-3 ">
                        <Hero />
                    </div>
                    <div id='experience' className='home-campaign-experience px-4 pt-8 overflow-hidden'>
                        <Experience />
                    </div>
                    <div id='education' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
                        <Education/>
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Publications/>
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Projects/>
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Skills/>
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Volunteering/>
                    </div>
                    <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
                        <Languages/>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    );
}

// backup