import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'Aun no hay gastos'}</h2>

            {
                gastos.map(gasto => (

                    <Gasto
                        key={gasto.id}
                        setGastoEditar={setGastoEditar}
                        gasto={gasto}
                        eliminarGasto={eliminarGasto} />

                ))
            }
        </div>
    )
}

export default ListadoGastos