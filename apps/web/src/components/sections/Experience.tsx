import { profileData } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-navy-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-sky-300 font-mono text-xs uppercase tracking-widest mb-6">
            02 / Trayectoria <span className="w-12 h-px bg-sky-300"></span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-16">
            Experiencia profesional.
          </h2>
        </motion.div>

        <div className="border-t border-white/20">
          {profileData.experience.map((job, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4"
            >
              <div className="text-sky-300 font-mono text-sm uppercase tracking-wide leading-relaxed">
                {job.date}
                <span className="block text-white/50 text-xs mt-2 whitespace-pre-line">{job.type}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-sky-300 transition-colors">{job.role}</h3>
                <div className="text-sky-300 text-sm mb-5">{job.company}</div>
                <p className="text-white/70 leading-relaxed text-sm max-w-3xl mb-6">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 group-hover:border-sky-300/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
