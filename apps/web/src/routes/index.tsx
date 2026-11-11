import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../components/layout/PublicLayout'
import AdminLayout from '../components/layout/AdminLayout'
import Home from '../pages/public/Home'
import Login from '../pages/admin/Login'
import Dashboard from '../pages/admin/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'login', element: <Login /> },
    ],
  },
])