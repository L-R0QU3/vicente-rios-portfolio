import { profileData } from '@/lib/data'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="perfil" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Foto Animada */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-md mx-auto w-full group"
        >
          <div className="absolute inset-0 border-2 border-navy-700 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img 
            src="https://i.postimg.cc/vmYbQMkX/imagen.png" 
            alt="Vicente Ríos Valdivia" 
            className="relative z-10 w-full aspect-[4/5] object-cover object-top saturate-75 contrast-105 transition-all duration-500 group-hover:saturate-100"
          />
          <div className="absolute -left-4 bottom-6 z-20 bg-sky-300 text-navy-950 px-4 py-2 font-mono text-xs uppercase tracking-widest shadow-lg">
            Vicente Ríos Valdivia · Chile
          </div>
        </motion.div>

        {/* Texto Animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 text-navy-700 font-mono text-xs uppercase tracking-widest mb-6">
            01 / El perfil <span className="w-12 h-px bg-navy-700"></span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy-950 mb-6">
            Conectar personas, procesos y oportunidades.
          </h2>
          <p className="font-display font-bold text-xl text-navy-950 leading-snug mb-6">
            {profileData.about.lead}
          </p>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{profileData.about.p1}</p>
            <p>{profileData.about.p2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10 border-t border-navy-950/10 pt-6">
            {profileData.about.facts.map((fact, idx) => (
              <motion.div 
                key={fact.label} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                viewport={{ once: true }}
                className="border-b border-navy-950/10 pb-4"
              >
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">{fact.label}</span>
                <strong className="text-sm text-navy-950">{fact.value}</strong>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
