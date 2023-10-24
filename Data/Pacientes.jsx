export async function obtenerPacientes() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado;
}

export async function obtenerPaciente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado;
}

export async function agregarPaciente(datos){

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export async function actualizarPaciente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarPaciente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}