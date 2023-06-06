import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MySkills from '../components/MySkills';


export default function Home() {
  return (
    <main className='text-white bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll z-0' >
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="experience" className='snap-center'>
        <Experience />
      </section>
      <section id="skills" className='snap-start'>
        <MySkills />
      </section>
    </main>
  )
}
