import { useState } from 'react'
import './App.css'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import Sobremi from './components/Sobremi/Sobremi'
import Experiencia from './components/Experiencia/Experiencia'
import Educacion from './components/Educacion/Educacion'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Element name="Inicio">
        <Inicio />
      </Element>
      <Element name="Sobremi">
        <Sobremi />
      </Element>
      <Element name="Experiencia">
        <Experiencia />
      </Element>
      <Element name="Educacion">
        <Educacion />
      </Element>
      <Element name="Contacto">
        <Contacto />
      </Element>
      <Footer />
    </>
  )
}

export default App
