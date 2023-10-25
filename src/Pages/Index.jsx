import { useLoaderData } from "react-router-dom";
import Paciente from "../Components/Paciente";
import { obtenerPacientes } from "../../Data/Pacientes";

export function loader(){
  const pacientes = obtenerPacientes();

  return pacientes
}

function Index() {

  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const today = new Date();
    return today.toLocaleDateString('es-ES', options);
  };

  // Función para formatear la hora en el formato de 12 horas
  const getFormattedTime = () => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const today = new Date();
    return today.toLocaleTimeString('es-ES', options);
  };


  const pacientes = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-500">Pacientes</h1>
      <p className="mt-3 text-2xl">Listado de Pacientes</p>

      <div className="md:flex">
        <p className='text-2xl mb-5 mt-10'>{getFormattedDate()}</p>
        <p className='text-2xl mb-5 md:ml-10 md:mt-10'>{getFormattedTime()}</p>
      </div>

      {pacientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-500 text-xl text-white">

            <tr>
              <th className="p-2 pl-6 text-left">Turno</th>
              <th className="p-2 pl-6 text-left">Nombre</th>
              <th className="p-2 pl-6 text-left">Estudio</th>
              <th className="p-2 pl-6 text-left">Tiempo</th>
              <th className="p-2 pl-6 text-left">Acciones</th>
            </tr>

          </thead>

          <tbody>
              {pacientes.map( paciente => (
               <Paciente 
                  paciente={paciente}
                  key={paciente.id}
               />
              ))}
          </tbody>

        </table>
      ) : (
        <p className="mt-3">No hay pacientes registrados</p>
      )}
    </>
  )
}

export default Index