import { Form, useActionData, redirect } from 'react-router-dom'
import React from 'react'
import Formulario from '../Components/Formulario'
import Error from '../Components/Error'
import { agregarPaciente } from '../../Data/Pacientes'

export async function action({request}) {
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

  await agregarPaciente(datos)
  
  return redirect('/')
}


const NuevoPaciente = () => {

  const errores = useActionData()

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-500">Nuevo Paciente</h1>
      <p className="mt-3 text-xl">Llena todos los campos para agregar un nuevo paciente a la lista de turnos</p>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>

        {errores?.length && errores.map( (error, i) => 
          <Error key={i}>{error}</Error> )}

          <Form
            method='post'
          >
              <Formulario />

              <input
                type='submit'
                className='mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-md uppercase cursor-pointer'
                value="Agregar Paciente"
              />
          </Form>

      </div>

    </>
  )
}

export default NuevoPaciente