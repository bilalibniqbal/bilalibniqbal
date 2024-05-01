'use client'
import React, { useState } from 'react'
import HoverCard from '../Experience/HoverCard'
import { motion } from "framer-motion"
import Volunteering from './Volunteering'

type Props = {}

const VolunteeringCard = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [showPy, setShowPy] = useState<boolean>(true)
    const [showJs, setShowJs] = useState<boolean>(false)
    const [showGo, setShowGo] = useState<boolean>(false)
    const [count, setCount] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: .1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: 'tween' } },
    };
    const lineVariant = {
        hidden: { height: 0 },
        show: { height: '100%' }
    }

    return (
        <HoverCard backgroundColor='#ff7b00' direction='' left='0'>
            <div className='md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between '>

                {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------- */}

                <div className=''>
                    <div className='flex relative md:pl-10'>
                        <img alt="" aria-hidden="true" width="2712" height="2712" className="absolute top-0 right-0 h-auto pointer-events-none" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" />
                        <div className='flex items-center flex-row relative'>
                            <motion.div variants={lineVariant} initial='hidden' whileInView='show' viewport={{ once: false }} transition={{ duration: 0.3 }} className='w-[3px] h-full increase origin-top'></motion.div>
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
                                src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg"
                            />
                        </div>
                        <div className='lg:pl-24 md:pl-16 pl-6'>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", delay: 0.1 }} className='mb-10 md:mb-32 pb-4 '>
                                <div className='py-4 text-left'>
                                    <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#ff7b00] relative font-medium bg-gradient-to-r from-[#ff7b00] to-[#ffb76b] bg-clip-text text-transparent'>
                                        <span className='font-semibold text-[12px]'>Active</span>
                                    </div>
                                    <h3 className="text-[#ff7b00] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">Peer Reviewer</h3>
                                    {/* <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">Full-time · 4 yrs 4 mos Islamabad, Pakistan · On-site </p> */}

                                    {/* ----------------------------------------------------- */}
                                    <ul className='text-xl md:text-2xl mb-6 font-medium text-[#7d8590]'> {/* list-disc '> */}
                                        <li><p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590] "><span className='text-white font-medium'>IEEE Access</span> <br /> IEEE <br /> Aug 2023 - Present · 10 mos</p></li>

                                        <li><p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-medium'>The Journal of Supercomputing</span> <br /> Springer Nature <br />Mar 2022 - Jul 2022 · 5 mos </p></li>
                                    </ul>

                                    {/* ----------------------------------------------------- */}
                                </div>
                            </motion.div>
                            <div>
                                <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className=' md:text-xl text-white font-semibold inline-block'>
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered ? "translate-x-0 " : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                    <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------------- */}




            </div>
        </HoverCard>
    )
}

export default VolunteeringCard