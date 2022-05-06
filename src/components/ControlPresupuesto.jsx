import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {


    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado

        setGastado(totalGastado)
        setDisponible(totalDisponible)

        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setPorcentaje(nuevoPorcentaje)

    }, [gastos])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Estás seguro de que quieres reiniciar la aplicación?')

        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        } else {
            console.log('no')
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas" >
            <div>
                <CircularProgressbar
                    styles={
                        buildStyles({
                            pathColor: porcentaje > 100 ? '#cd2626' : '#3b82f6',
                            trailColor: '#f5f5f5',
                            textColor: porcentaje > 100 ? '#cd2626' : '#3b82f6',
                        })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`} />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app"
                    type="button"
                    onClick={handleResetApp}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div >
    )
}

export default ControlPresupuesto