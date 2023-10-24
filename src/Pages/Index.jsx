import { useLoaderData } from "react-router-dom";
import Paciente from "../Components/Paciente";
import { obtenerPacientes } from "../../Data/Pacientes";

export function loader(){
  const pacientes = obtenerPacientes();

  return pacientes
}

function Index() {

  const pacientes = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-500">Pacientes</h1>
      <p className="mt-3 text-xl">Listado de Pacientes</p>

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