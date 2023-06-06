/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import OuterCircle from './OuterCircle'
import Link from 'next/link';




type Props = {}

const Hero = (props: Props) => {
    const [text] = useTypewriter({
        words: ['Hello, kd rai here', '<loveProgramming />'],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <OuterCircle />
            <Image src="/man1.jpg" className='relative rounded-full h-32 w-32 mx-auto object-cover' priority height={128} width={128} alt="human" />
            <div className='z-20'>
                <h2 className='uppercase text-gray-500 pb-2 text-sm tracking-[15px]'>software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5'>
                    <a href="#about" >
                        <button className='heroButton'>About</button>
                    </a>
                    <a href="#experience" >
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href="#skills" >
                        <button className='heroButton'>Skills</button>
                    </a>
                    <Link href="#projects" >
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero