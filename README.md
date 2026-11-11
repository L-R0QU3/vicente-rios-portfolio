# Vicente Ríos Portfolio

Portafolio profesional de **Vicente Ríos Valdivia**, Ingeniero en Negocios Internacionales.

## Estado

Fase 1 completada: monorepo inicial con frontend, backend y paquete compartido.
Las pantallas son placeholders. El diseño final, la autenticación, el CMS y la base
de datos se implementan en fases posteriores.

## Stack

- Frontend: React 18, Vite, TypeScript, Tailwind CSS, React Router
- Backend: Node.js, Express, TypeScript
- Datos: Supabase (PostgreSQL, Auth, Storage, RLS)
- Tooling: pnpm workspaces, Git, GitHub

## Requisitos

- Node.js >= 20
- pnpm >= 9
- Git

## Instalación

```powershell
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install
Copy-Item .env.example .env
Set-Location C:\Proyectos\vicente-rios-portfolio

Write-File "apps/web/package.json" @'
{
  "name": "@vicente-rios/web",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "clean": "Remove-Item -Recurse -Force dist,node_modules,.vite -ErrorAction SilentlyContinue"
  },
  "dependencies": {
    "@vicente-rios/shared": "workspace:*",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/node": "^22.9.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}