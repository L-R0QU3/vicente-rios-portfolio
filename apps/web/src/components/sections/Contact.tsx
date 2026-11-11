import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Marca de agua gigante con animación de entrada */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -right-10 -bottom-20 font-display font-black text-[15rem] md:text-[25rem] leading-none pointer-events-none select-none z-0"
      >
        VRV
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-sky-300 font-mono text-xs uppercase tracking-widest mb-6">
            05 / Próximo capítulo <span className="w-12 h-px bg-sky-300"></span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl mb-8">
            Las buenas oportunidades <span className="text-sky-300">no conocen fronteras.</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Vicente Ríos Valdivia · Ingeniero en Negocios Internacionales. Un perfil orientado a conectar conocimientos, personas y procesos en un entorno global.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Botones animados */}
            <motion.a 
              href="mailto:contacto@ejemplo.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-300 text-navy-950 font-bold px-8 py-4 hover:bg-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
            >
              Enviar un correo <span>↗</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/vriosvaldivia/" 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white font-bold px-8 py-4 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
            >
              Ver LinkedIn <span>↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
