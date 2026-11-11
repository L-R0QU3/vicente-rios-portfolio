import { profileData } from '@/lib/data'

export default function Hero() {
  return (
    // Cambiamos pb-12 a pb-0 para que la imagen pueda tocar el borde inferior
    <header className="relative min-h-screen bg-navy-950 flex items-center overflow-hidden pt-24 pb-0">
      {/* Fondo geométrico */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-300 rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 h-full">
        {/* Le damos un poco más de proporción a la columna de la imagen (1.3fr) */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center h-full">
          
          {/* Columna de Texto - Se mantiene igual */}
          <div className="z-20 pb-16">
            <div className="flex items-center gap-3 mb-6 text-sky-300 font-mono text-xs tracking-widest uppercase">
              <span className="w-10 h-[2px] bg-sky-300"></span>
              Negocios sin fronteras · Chile
            </div>
            
            <h1 className="text-white font-display font-black leading-[0.9] tracking-tighter text-[clamp(3.5rem,6vw,6rem)]">
              {profileData.hero.name} <br />
              <span className="text-sky-300">{profileData.hero.surname}</span>
            </h1>
            
            <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
              {profileData.hero.role}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-8 max-w-lg">
              {profileData.hero.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-white/30 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#perfil" className="bg-sky-300 text-navy-950 font-bold px-6 py-3.5 hover:bg-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wide whitespace-nowrap">
                Conoce mi perfil <span>↘</span>
              </a>
              <span className="hidden md:block text-white/50 font-mono text-xs uppercase tracking-widest">
                Ingeniería en Negocios Internacionales · UV
              </span>
            </div>
          </div>

          {/* Columna de Imagen - Anclada al fondo y empujada a la derecha */}
          <div className="relative hidden lg:flex justify-end items-end h-full z-10 w-full">
            {/* Resplandor detrás de la foto */}
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-300 rounded-full blur-[120px] opacity-20"></div>
            
            <img 
              src="/Vicente1.png" 
              alt="Vicente Ríos Valdivia" 
              className="relative z-10 h-[85vh] xl:h-[92vh] w-auto max-w-none object-contain object-bottom drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] -mr-8 xl:-mr-16"
            />
          </div>

        </div>
      </div>

      {/* Sello VRV reposicionado */}
      <div className="hidden xl:grid absolute right-[2%] bottom-[8%] w-32 h-32 border-2 border-sky-300 rounded-full place-items-center text-center text-sky-300 rotate-12 z-20 opacity-80 pointer-events-none">
        <div className="font-mono text-[10px] leading-tight tracking-widest">
          <b className="block font-display text-2xl mb-1">VRV</b>
          PERFIL<br/>PROFESIONAL<br/>2026
        </div>
      </div>
    </header>
  )
}
