import React from "react"
import "./Inicio.css"
import { Link } from "react-scroll"

const Inicio = () => {

  return (
    <div className='inicio-container'>
      <div className='inicio-info'>
        <div className='inicio-greeting'>
          <h3>Hola!</h3>
          <h2>Soy <span>Manuel Colás</span></h2>
          <h3>Ing. Agrónomo y Perito Clasificador</h3>
        </div>
{/*         <div className='inicio-button'>
          <Link smooth={true} to="Sobremi"><button>Sobre Mi</button></Link>
        </div> */}
      </div>
    </div>
  )
}

export default Inicio
