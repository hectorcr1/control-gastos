import CerrarBtn from '../img/cerrar.svg'
import { useState } from 'react'


const Modal = ({ setModal, animarModal, setAnimarModal }) => {


   const [nombre, setNombre] = useState('')
   const [cantidad, setCantidad] = useState('')
   const [categoria, setCategoria] = useState('')

   const ocutarModel = () => {
      setModal(false)
      setAnimarModal(false)
   }

   return (
      <div className="modal">
         <div className="cerrar-modal">
            <img src={CerrarBtn}
               alt="Cerrar modal"
               onClick={ocutarModel}
            />
         </div>

         <form className={`formulario ${animarModal ? "animar" : ''}`}>
            <legend>Nuevo Gasto</legend>



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

            <input type="submit" value="Añadir gasto" />

         </form>
      </div>
   )
}

export default Modal