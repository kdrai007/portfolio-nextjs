
'use client'

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/src/utils/motion';

type Props = {
    title: string,
    textStyles?: string
}

const TypingText = ({ title, textStyles }: Props) => (
    <motion.p
        variants={textContainer}
        className={`absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

export default TypingText