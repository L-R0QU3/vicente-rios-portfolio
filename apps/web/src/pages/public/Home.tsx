import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vicente Ríos Valdivia | Negocios Internacionales</title>
        <meta name="description" content="Portafolio profesional de Vicente Ríos Valdivia, Ingeniero en Negocios Internacionales. Aduanas, adquisiciones, logística e importación/exportación." />
      </Helmet>
      
      <Hero />
      
      {/* Ticker animado con desplazamiento infinito */}
      <div className="bg-sky-300 text-navy-950 overflow-hidden py-3 border-y border-navy-950/10 whitespace-nowrap font-mono text-xs uppercase tracking-widest">
        <div className="animate-[marquee_20s_linear_infinite] inline-block min-w-[200%]">
          <span className="mx-6">Comercio exterior</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Abastecimiento</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Negociación</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Logística</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Importación & exportación</span><b className="text-navy-700">✳</b>
          
          <span className="mx-6">Comercio exterior</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Abastecimiento</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Negociación</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Logística</span><b className="text-navy-700">✳</b>
          <span className="mx-6">Importación & exportación</span><b className="text-navy-700">✳</b>
        </div>
      </div>

      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}
