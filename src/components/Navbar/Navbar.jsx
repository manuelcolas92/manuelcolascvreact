import React, { useState } from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Particlesbackground from "../Particlesbackground/Particlesbackground"
import './Navbar.css'

const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    )
  }

  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (<>
    <div className={header ? "particles active" : "particles"}><Particlesbackground /></div>
    <header className={header ? "header active" : "header"}>
      <h3><span>M.</span>Colás</h3>
      <div>
        <nav ref={navRef}>
          <Link smooth={true} to="Inicio" className='navLinks'>INICIO</Link>
          <Link smooth={true} to="Experiencia" className='navLinks'>EXPERIENCIA</Link>
          <Link smooth={true} to="Educacion" className='navLinks'>EDUCACION</Link>
          <Link smooth={true} to="Contacto" className='navLinks'>CONTACTO</Link>
          <button className='pdf'>.PDF</button>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  </>
  )
}

export default Navbar