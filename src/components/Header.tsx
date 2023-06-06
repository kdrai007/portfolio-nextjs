'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { myIconsUrl } from '../utils/Assets'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {

    return (
        <header className='flex flex-row justify-between items-start sticky top-0 max-w-7xl mx-auto z-10 xl:items-center p-5' >
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex items-center '>
                {myIconsUrl.map((icon, index) => (
                    <SocialIcon key={index} url={icon} fgColor="gray" bgColor="transparent" />
                ))}
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex items-center'>
                <SocialIcon network='email' bgColor='transparent' fgColor="gray" className='cursor-pointer ' />
                <p className='uppercase  md:inline-flex hidden text-sm text-gray-400 '>get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header