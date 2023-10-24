import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import NuevoPaciente, {action as nuevoPacienteAction} from './Pages/NuevoPaciente'
import Index, {loader as pacientesLoader } from './Pages/Index'
import VistaPaciente from './Components/VistaPaciente'
import ErrorPage from './Components/ErrorPage'
import EditarPaciente, {loader as editarPacienteLoader, action as editarPacienteAction } from './Pages/EditarPaciente'
import { action as eliminarPacienteAction  } from './Components/Paciente'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: pacientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/pacientes/nuevo',
        element: <NuevoPaciente />,
        action: nuevoPacienteAction,
        errorElement: <ErrorPage />
      },
   
      {
        path: '/pacientes/:id/editar',
        element: <EditarPaciente  />,
        loader: editarPacienteLoader,
        action: editarPacienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/pacientes',
        element: <VistaPaciente />,
        loader: pacientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/pacientes/:id/eliminar',
        action: eliminarPacienteAction,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
