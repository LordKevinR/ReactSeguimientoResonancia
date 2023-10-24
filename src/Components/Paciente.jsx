import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarPaciente } from "../../Data/Pacientes"

export async function action({params}) {
    await eliminarPaciente(params.id)
    return redirect("/")
}

function Paciente({paciente}) {

  const navigate = useNavigate()

  const {id, nombre, turno, telefono, factura, estudio, tiempo} = paciente

  return (
    <tr className="border-b">

        <td className="p-6 space-y-2">
            <p className="text-xl text-gray-800">{turno}</p>
        </td>

        <td className="p-6 space-y-2">
            <p className="text-xl text-gray-800">{nombre}</p>
            <p>factura: {factura}</p>
            <p>tel: {telefono}</p>
        </td>

        <td className="p-6 space-y-2">
            <p className="text-xl text-gray-800">{estudio}</p>
        </td>

        <td className="p-6 space-y-2">
            <p className="text-xl text-gray-800">{tiempo} Minutos</p>
        </td>

        <td className="p-6 flex">
            <button 
                type="button"
                className="bg-indigo-500 hover:bg-indigo-700 mr-3 px-4 py-2 text-white rounded-md "
                onClick={() => navigate(`/pacientes/${id}/editar`)}
            >Editar</button>

            <Form
                method="POST"
                action={`/pacientes/${id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm("¿Deseas eliminar a este paciente de la lista de turnos?")){
                        e.preventDefault()
                    }
                }}
            >
                <button 
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-md "
                >Eliminar</button>
            </Form>
        </td>

    </tr>  
  )
}

export default Paciente