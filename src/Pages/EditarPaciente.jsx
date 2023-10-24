import {obtenerPaciente, actualizarPaciente} from '../../Data/Pacientes'
import Formulario from '../Components/Formulario'
import { Form, useActionData, useLoaderData, redirect } from 'react-router-dom'
import Error from '../Components/Error';

export async function loader({params}){
  const paciente = await obtenerPaciente(params.id);

  if(paciente.status == 404){
    throw new Response("", {status: 404, statusText: 'No Hay Resultado'});
  }

  return paciente;
}

export async function action({request, params}){
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  //Validaciones
  const errores = [];
  if( Object.values(datos).includes('') ) {
    errores.push('Todos los campos son obligatorios')
  }

  if( Object.keys(errores).length){
    return errores;
  }

  //actualizar cliente
  await actualizarPaciente(params.id, datos)
  
  return redirect('/')
}

function EditarPaciente() {

  const paciente = useLoaderData();
  const errores = useActionData();


  return (
    <>
      <h1 className="font-bold text-4xl text-blue-500">Editar Paciente</h1>
      <p className="mt-3 text-xl">Realice los cambios deseados al paciente</p>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>

        {errores?.length && errores.map( (error, i) => 
          <Error key={i}>{error}</Error> )}

          <Form
            method='post'
          >
              <Formulario
                paciente={paciente}
              />

              <input
                type='submit'
                className='mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-md uppercase cursor-pointer'
                value="Editar Paciente"
              />
          </Form>

      </div>

    </>
  )
}

export default EditarPaciente