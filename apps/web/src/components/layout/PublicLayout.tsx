import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function PublicLayout() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/90 backdrop-blur-md text-white border-b border-white/10 shadow-lg py-3' 
          : 'bg-transparent text-white py-6'
      }`}>
        <Link to="/" className="font-bold tracking-tighter text-xl">
          VICENTE<span className="text-sky-300">.</span>RV
        </Link>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          <a href="#perfil" className="hover:text-sky-300 transition-colors">Perfil</a>
          <a href="#experiencia" className="hover:text-sky-300 transition-colors">Experiencia</a>
          <a href="#formacion" className="hover:text-sky-300 transition-colors">Formación</a>
          <a href="#competencias" className="hover:text-sky-300 transition-colors">Competencias</a>
          <a href="#contacto" className="border border-sky-300 text-sky-300 px-4 py-2 hover:bg-sky-300 hover:text-navy-950 transition-colors">Contacto</a>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[#061525] text-white/60 px-6 py-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-wider">
        <div>© {new Date().getFullYear()} <strong className="text-sky-300">Vicente Ríos Valdivia</strong> · Portafolio</div>
        <div>Diseñado para presentar una trayectoria sin fronteras.</div>
      </footer>
    </div>
  )
}
