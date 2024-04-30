import Image from "next/image";
// import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';

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
                </div>
            </div>
        </div>
    );
}
