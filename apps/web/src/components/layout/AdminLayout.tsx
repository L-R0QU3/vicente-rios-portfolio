import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between">
        <Link to="/admin" className="font-bold">Panel administrativo</Link>
        <Link to="/" className="text-sm hover:text-sky-300">Volver al sitio</Link>
      </header>
      <main className="max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}