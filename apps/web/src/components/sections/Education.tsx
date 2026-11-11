import { motion } from 'framer-motion'

export default function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="formacion" className="py-24 md:py-32 bg-paper overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 text-navy-700 font-mono text-xs uppercase tracking-widest mb-6">
            03 / Formación y participación <span className="w-12 h-px bg-navy-700"></span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy-950 mb-12">
            Conocimiento en movimiento.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-sky-300 p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          >
            <span className="font-mono text-xs uppercase tracking-wider mb-6 block">Formación académica</span>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight mb-4 relative z-10 max-w-xs">
              Ingeniero en Negocios Internacionales
            </h3>
            <p className="text-navy-950/80 text-sm relative z-10">
              Universidad de Valparaíso<br/>Mención en Idioma Francés
            </p>
            <span className="font-mono text-xs mt-8 block relative z-10">MAR. 2020 — JUL. 2026</span>
            <span className="absolute -right-4 -bottom-8 font-display font-black text-[10rem] leading-none text-navy-950/5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">UV</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white border border-navy-950/10 p-8 md:p-10 relative overflow-hidden hover:shadow-xl transition-shadow duration-500"
          >
            <span className="font-mono text-xs uppercase tracking-wider mb-6 block text-muted">Participación internacional</span>
            <h3 className="font-display font-bold text-2xl leading-tight mb-4 relative z-10 max-w-xs">
              3rd WCO Global Origin Conference
            </h3>
            <p className="text-muted text-sm relative z-10">
              Oyente y ayudante en encuentro internacional centrado en reglas de origen. Apoyo en la recepción de delegaciones de distintos países.
            </p>
            <span className="font-mono text-xs mt-8 block relative z-10 text-navy-700">NOVIEMBRE 2023 · SANTIAGO, CHILE</span>
            <span className="absolute -right-2 bottom-2 font-display font-black text-[6rem] leading-none text-navy-950/5 group-hover:scale-110 transition-transform duration-500">WCO</span>
          </motion.div>
        </div>

        {/* Cursos */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((item, idx) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.2) }}
              viewport={{ once: true }}
              className="bg-cream border border-navy-950/10 p-6 flex gap-4 items-start hover:border-navy-950/30 transition-colors cursor-default"
            >
              <div className="w-10 h-10 bg-navy-950 text-white flex items-center justify-center font-display font-bold shrink-0">0{item}</div>
              <div>
                <h4 className="font-bold text-sm mb-2 leading-snug">
                  {item === 1 
                    ? "Seguridad en ASMAR, Inclusión y Diversidad, Ley Karin y Capacidades Sociolaborales" 
                    : "Técnicas para la Aplicación de Capacidades Sociolaborales e Inserción Laboral"}
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {item === 1 ? "Asociado con ASMAR" : "ASMAR · Código: 1238081075"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
