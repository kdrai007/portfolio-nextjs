/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"

const ExperienceCard = () => {
    return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500p] xl:w-[900px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src="/man1.jpg" alt="avatar" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of xyz</h4>
            <p className='text-2xl mt-1 font-semibold'>Nothing</p>
            <div className='flex space-x-2 my-2'>
                <img src="/assets/css.png" alt="css image" className='w-[28px] h-[28px] object-contain' />
                <img src="/assets/javascript.png" alt="css image" className='w-[28px] h-[28px] object-contain' />
                <img src="/assets/git.png" alt="css image" className='w-[28px] h-[28px] object-contain' />
            </div>
            <p>started work ...end</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet.</li>

            </ul>
        </div>
    </article>
}

export default ExperienceCard;