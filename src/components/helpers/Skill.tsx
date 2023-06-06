/* eslint-disable @next/next/no-img-element */

'use client'

import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean
    url: string;
    name: string;
    skillLevel?: string
}

const Skill = ({ url, name, directionLeft, skillLevel }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className='w-[80px] h-[80px] object-contain rounded-full border border-gray-400 p-2 group-hover:grayscale group-hover:bg-white transition duration-300 ease-in-out' src={url} alt={name} />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group:hover:bg-white h-24 w-24'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skillLevel ? `${skillLevel}%` : "0%"}</p>
                </div>
            </div>
        </div>
    )

}

export default Skill