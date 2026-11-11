import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { title: "Adquisiciones", desc: "Procesos de compra, órdenes de compra y apoyo a la gestión de abastecimiento." },
    { title: "Proveedores", desc: "Comunicación, coordinación y búsqueda de soluciones ante requerimientos operativos." },
    { title: "Comercio exterior", desc: "Interés y formación en importaciones, exportaciones y operaciones internacionales." },
    { title: "Logística", desc: "Acercamiento a abastecimiento, embarcadores y necesidades de planta." },
    { title: "Negociación", desc: "Análisis de precios, comunicación y colaboración en la búsqueda de acuerdos." },
    { title: "Idiomas y comunicación", desc: "Formación universitaria con mención en Idioma Francés y experiencia de mentoría académica." }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="competencias" className="py-24 bg-[#e4eaf0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-navy-700 font-mono text-xs uppercase tracking-widest mb-6">
            04 / Áreas de interés <span className="w-12 h-px bg-navy-700"></span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy-950 mb-12">
            Una visión amplia del comercio.
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-navy-950/10 border border-navy-950/10"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-[#e4eaf0] p-8 min-h-[200px] transition-all duration-300 hover:bg-sky-300 hover:-translate-y-1 group"
            >
              <span className="text-navy-700 font-mono text-xs group-hover:text-navy-950/70 transition-colors">
                0{idx + 1} — 06
              </span>
              <h3 className="font-display font-bold text-xl mt-6 mb-3 group-hover:text-navy-950 transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed group-hover:text-navy-950/80 transition-colors">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
