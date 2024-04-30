import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const Uni = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='flex relative md:pl-10'>
    <img alt="" aria-hidden="true" width="2712" height="2712" className="absolute top-0 right-0 h-auto pointer-events-none" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" />
    <div className='flex items-center flex-row relative'>
        <motion.div initial={{height:0}} whileInView={{height:'100%'}} className='w-[3px] h-full increase1'></motion.div>
        <img
            alt=""
            aria-hidden="true"
            width="81"
            height="485"
            style={{
                left: 'calc(50% - 2px)',
                height: 'auto',
                maxWidth: '9vw',
                transitionDelay: '100ms',
            }}
            className="hidden md:block absolute bottom-4 left-0"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
        />
    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Did you know?</span>
                </div>
                <h3 className="text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">COMSATS University Islamabad</h3>
            </div>
        </motion.div>
    </div>
  </div>
  )
}

export default Uni