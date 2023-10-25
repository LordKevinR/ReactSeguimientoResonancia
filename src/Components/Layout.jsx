import {Outlet, Link, useLocation} from 'react-router-dom'
const Layout = () => {

    const location = useLocation();


  return (
    <div className='lg:flex lg:min-h-screen'>
        <aside className='lg:w-1/4 bg-blue-500 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>Seguimiento Pacientes</h2>

            <nav className='mt-10 text-center lg:text-left'>

                <Link 
                className={`text-2xl text-white block p-1 hover:scale-105 transition transform rounded-lg hover:bg-white hover:bg-opacity-25 hover:p-1`} 
                to='/'>Pacientes</Link>

                <Link className={`text-2xl text-white block p-1 hover:scale-105 transition transform rounded-lg hover:bg-white hover:bg-opacity-25 hover:p-1`} 
                to='/pacientes/nuevo'>Nuevo Paciente</Link>

                <Link className={`text-2xl text-white block p-1 hover:scale-105 transition transform rounded-lg hover:bg-white hover:bg-opacity-25 hover:p-1`} 
                to='/pacientes'>Buscador interno</Link>

                <a
                className={`text-2xl text-white block p-1 hover:scale-105 transition transform rounded-lg hover:bg-white hover:bg-opacity-25 hover:p-1`}
                href="https://seguimientoresonanciabuscador.netlify.app/" target="_blank" >Buscador del Paciente</a>


            </nav>
        </aside>

        <main className='lg:w-3/4 p-10 md:h-screen lg:overflow-scroll'>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Layout