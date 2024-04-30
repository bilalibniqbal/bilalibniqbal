'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Work2 from './Work2'

type Props = {}

const Company1 = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)

    const lineVariant = {
        hidden: { height: 0 },
        show: { height: '100%' }
    }
    return (
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
                <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
                </div>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", delay: 0.1 }} className='mb-10 md:mb-32 pb-4 '>
                    <div className='py-4 text-left'>
                    <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#7ee787] relative font-medium bg-gradient-to-r from-[#7ee787] to-[#aff5b4] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Pvt. Ltd.</span>
                    </div>
                    <h3 className="text-[#7ee787] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">Infinity Innovations Inc.</h3>
                    </div>
                </motion.div>
            </div>
        </div>
                {/* <div className=''><Work2 /></div> */}
        </div>
    )
}

export default Company1