'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import ExperienceCard from './helpers/ExperienceCard'
import TypeText from './helpers/TypeText'

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div
            variants={staggerContainer()}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className='h-screen overflow-hidden relative flex items-center justify-evenly max-w-full mx-auto px-10 text-left flex-col md:flex-row'>
            <TypeText title="Experience" />
            <div className='flex overflow-x-scroll  gap-4'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div >
    )
}

export default Experience