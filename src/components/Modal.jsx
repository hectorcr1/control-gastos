import { useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { useState } from 'react'

const Modal = ({
   setModal,
   animarModal,
   setAnimarModal,
   guardarGasto,
   gastoEditar,
   setGastoEditar }) => {

   const [mensaje, setMensaje] = useState('')
   const [nombre, setNombre] = useState('')
   const [cantidad, setCantidad] = useState('')
   const [categoria, setCategoria] = useState('')
   const [fecha, setFecha] = useState('')
   const [id, setId] = useState('')

   useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
         setNombre(gastoEditar.nombre)
         setCantidad(gastoEditar.cantidad)
         setCategoria(gastoEditar.categoria)
         setId(gastoEditar.id)
         setFecha(gastoEditar.fecha)
      }
   }, [])

   const ocutarModel = () => {
      setModal(false)
      setAnimarModal(false)
      setGastoEditar({})
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if ([nombre, cantidad, categoria].includes('')) {
         setMensaje('Todos los campos son obligatorios')

         setTimeout(() => {
            setMensaje('')
         }, 3000)

         return
      }

      guardarGasto({ nombre, cantidad, categoria, id, fecha })

   }

   return (
      <div className="modal">
         <div className="cerrar-modal">
            <img src={CerrarBtn}
               alt="Cerrar modal"
               onClick={ocutarModel}
            />
         </div>

         <form
            className={`formulario ${animarModal ? "animar" : ''}`}
            onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Añadir Gasto'}</legend>

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

            <div className="campo">
               <label htmlFor="nombre">Nombre Gasto</label>
               <input type="text"
                  id="nombre"
                  placeholder="Nombre del gasto"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
               />
            </div>

            <div className="campo">
               <label htmlFor="cantidad">Cantidad</label>
               <input type="text"
                  id="cantidad"
                  placeholder="cantidad del gasto ej: 3500"
                  value={cantidad}
                  onChange={e => setCantidad(Number(e.target.value))}
               />
            </div>

            <div className="campo">
               <label htmlFor="categoria">Categoria</label>
               <select type="text"
                  id="nombre"
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
               >

                  <option value="">-- Seleccione un gasto --</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="gastos varios">Gastos varios</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                  <option value="suscripciones">Suscripcipones</option>
               </select>
            </div>

            <input type="submit" value={gastoEditar.nombre ? 'Editar Gasto' : 'Guardar gasto'} />

         </form>
      </div>
   )
}

export default Modal