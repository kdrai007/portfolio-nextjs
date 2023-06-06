'use client'

import { motion } from "framer-motion"
import TypeText from "./helpers/TypeText";
import { staggerContainer } from '../utils/motion';

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            variants={staggerContainer()}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center h-screen p-5'>
            {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                About
            </h3> */}
            <TypeText title="| About" />
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 md:w-64 h-56 md:h-95 rounded-full md:rounded-lg object-cover xl:w-[500px] xl:h-[600px] '
                src="/man1.jpg" />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'> little </span>background</h4>
                <p className='text-sm'>Lorem ipsum😂 dolor sit amet consectetur adipisicing elit. Praesentium aspernatur pariatur optio dolorem dolores eveniet, distinctio libero earum sit voluptas in fugit ullam expedita, vero excepturi? Recusandae totam assumenda rerum consequatur sequi aliquid beatae architecto corporis, expedita vero sunt illum consectetur labore repellat qui. Temporibus, mollitia ipsum rerum magnam omnis voluptate modi unde dolores at distinctio ea quis facilis. Molestiae minus ducimus iusto minima dolor tenetur aliquam officiis praesentium vitae doloremque reiciendis ratione, qui sint voluptates, quae obcaecati corporis a veniam eius quaerat itaque laborum. Mollitia, dicta autem repellat voluptas nemo provident laudantium quod praesentium iste officia perspiciatis sit blanditiis.</p>
            </div>
        </motion.div>
    )
}

export default About