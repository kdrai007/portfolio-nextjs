'use client'

import React from 'react'
import Skill from './helpers/Skill'
import { skills } from '../utils/Assets'
import { motion } from "framer-motion"
import { staggerContainer } from '../utils/motion'
import TypingText from './helpers/TypeText'

type Props = {}

const MySkills = (props: Props) => {
    return (
        <motion.div
            variants={staggerContainer()}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className='h-screen overflow-hidden relative flex items-center justify-evenly max-w-full mx-auto px-10 text-left flex-col md:flex-row'>
            <TypingText title="| My Skills" />
            <div className='grid grid-cols-4 gap-5  mt-5 xl:mt-0'>
                {skills.map((item) => (
                    <Skill key={item.id} {...item} />
                ))}
            </div>
        </motion.div>
    )
}

export default MySkills