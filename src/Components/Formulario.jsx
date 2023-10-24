const Formulario = ({paciente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="turno"
                >Turno:</label>
                <input 
                    id="turno"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Turno del Paciente"
                    name="turno"
                    defaultValue={paciente?.turno}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Paciente"
                    name="nombre"
                    defaultValue={paciente?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="factura"
                >Factura:</label>
                <input 
                    id="factura"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Factura del Paciente"
                    name="factura"
                    defaultValue={paciente?.factura}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Paciente"
                    name="telefono"
                    defaultValue={paciente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="tiempo"
                >Tiempo: </label>

                <select 
                    id="tiempo"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="tiempo"
                    defaultValue={paciente?.tiempo}
                >
                    {Array.from({ length: 27 }, (_, index) => (
                    <option key={index} value={(index * 5) + 20}>{(index * 5) + 20} minutos</option>
                    ))}
                </select>
            </div>


            <div className="mb-4">
                <label className="text-gray-800" htmlFor="estudio">
                    Estudio:
                </label>

                <select
                    id="estudio"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="estudio"
                    defaultValue={paciente?.estudio}
                >
                    <option value="">--Selecciona un tipo de estudio--</option>
                    <option value="Resonancia magnética">Resonancia magnética</option>
                    <option value="Tomografía computarizada">Tomografía computarizada</option>
                    <option value="Ecografía">Ecografía</option>
                    <option value="Radiografía">Radiografía</option>
                    <option value="Resonancia magnética cerebral">Resonancia magnética cerebral</option>
                    <option value="Resonancia magnética de columna">Resonancia magnética de columna</option>
                    <option value="Resonancia magnética de rodilla">Resonancia magnética de rodilla</option>
                    <option value="Resonancia magnética de pelvis">Resonancia magnética de pelvis</option>
                    <option value="Resonancia magnética de hombro">Resonancia magnética de hombro</option>
                    <option value="Resonancia magnética de abdomen">Resonancia magnética de abdomen</option>
                    <option value="Resonancia magnética de mama">Resonancia magnética de mama</option>
                    <option value="Resonancia magnética de articulaciones">Resonancia magnética de articulaciones</option>
                    <option value="Resonancia magnética de cadera">Resonancia magnética de cadera</option>
                    <option value="Resonancia magnética de pierna">Resonancia magnética de pierna</option>
                    <option value="Resonancia magnética de tobillo">Resonancia magnética de tobillo</option>
                    <option value="Resonancia magnética de muñeca">Resonancia magnética de muñeca</option>
                    <option value="Resonancia magnética de codo">Resonancia magnética de codo</option>
                    <option value="Resonancia magnética de mano">Resonancia magnética de mano</option>
                    <option value="Resonancia magnética de corazón">Resonancia magnética de corazón</option>
                    <option value="Resonancia magnética de riñón">Resonancia magnética de riñón</option>
                    <option value="Resonancia magnética de próstata">Resonancia magnética de próstata</option>
                    <option value="Resonancia magnética de vejiga">Resonancia magnética de vejiga</option>

                    {/* Agrega más tipos de estudios según sea necesario */}
                </select>
            </div>


            {/* <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                />
            </div> */}
        </>
    )
}

export default Formulario