import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";

function VistaPaciente() {

    const pacientes = useLoaderData();

  const [numeroFactura, setNumeroFactura] = useState('');
  const [pacienteEncontrado, setPacienteEncontrado] = useState('');


  const buscarPaciente = () => {
    const pacienteBuscado = pacientes.find((paciente) => paciente.factura == numeroFactura);
    setPacienteEncontrado(pacienteBuscado);
  };

  function calcularTiempoAnteriores(pacientes, numeroDeFactura){

    let tiempoTotal = 0;
    
    for ( const paciente of pacientes ) {

        if(paciente.factura == numeroDeFactura){
            break;
        }

        tiempoTotal += paciente.tiempo;
    }
    
    return tiempoTotal;
  }

  const tiempoAnterior = calcularTiempoAnteriores(pacientes, numeroFactura);

  console.log(tiempoAnterior);

  function formatoHorasDesdeMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
  
    return `${horas} horas ${minutosRestantes} minutos`;
  }

  const tiempoFormato = formatoHorasDesdeMinutos(tiempoAnterior);



  return (
    <>
        <div className='max-w-5xl w-full md:w-3/4 rounded-lg mx-auto md:my-40 sm:my-20 md:p-5'>

            <h1 className='md:text-5xl  text-2xl text-blue-500 font-bold mb-3 text-center'>Seguimiento Resonancia</h1>
            <p className='md:text-2xl text-lg text-blue-500 text-center mb-10'>Por favor, introduzca su número de factura para ver su turno.</p>

            <div className='w-full flex'>
                <input
                className='md:w-3/4 border border-gray-500 rounded-lg p-2'
                    type="number"
                    placeholder="Número de Factura"
                    value={numeroFactura}
                    onChange={(e) => {setNumeroFactura(e.target.value)}}
                    onKeyUp={buscarPaciente}
                />
                <button className='w-1/4 text-white font-bold py-2 text-lg ml-2 bg-blue-500 rounded-md' onClick={buscarPaciente}>Buscar</button>
            </div>

            {pacienteEncontrado ? (
                <div>
                    <p className='text-xl mt-5 font-bold'>Tiempo restante para su turno: <span className='text-xl text-red-400'>{tiempoFormato}</span></p>
                </div>
            ) : (
                <div>

                </div>
            ) }

            {pacienteEncontrado ? (
                <div>
                    <table className="border-collapse mt-5 border w-full">
                        <tbody>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Nombre</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.nombre}</td>
                            </tr>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Turno</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.turno}</td>
                            </tr>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Teléfono</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.telefono}</td>
                            </tr>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Factura</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.factura}</td>
                            </tr>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Estudio</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.estudio}</td>
                            </tr>
                            <tr className="border border-gray-400 text-lg">
                            <td className="border border-gray-400 text-lg p-2">Tiempo del estudio</td>
                            <td className="border border-gray-400 text-lg p-2">{pacienteEncontrado.tiempo} minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className='mt-10 text-center text-blue-500 text-xl'>Introduzca un número de factura válido.</p>
            )}
        </div>
    </>
  )
}

export default VistaPaciente