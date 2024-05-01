'use client'
import React, { useState } from 'react'
import HoverCard from '../Experience/HoverCard'
import Pubs from './Pubs'
import { motion } from "framer-motion"

type Props = {}

const Publications = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };
    return (
        <div className='max-w-[1280px] mx-auto'>
            <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
                <div className='flex flex-col items-center'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className='relative'>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-lock text-white">
                            <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                    </motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ delay: 0.8 }} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: 'tween' }} className='md:w-10/12 mb-24'>
                    <h2 className="text-[20px] md:text-2xl mb-7 font-medium js-build-in-item build-in-slideX-left build-in-animate text-[#939aff] text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl" style={{ transitionDelay: '200ms' }}>Publications</h2>
                </motion.div>
            </motion.div>
            <Pubs />
        </div>
    )
}

export default Publications