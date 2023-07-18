import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesconfig from './Particles-config/particlesconfig'

const Particlesbackground = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

  return (
    <div>
        <Particles 
        id='tsparticles'
        options={particlesconfig}
        init={particlesInit}/>
    </div>
  )
}

export default Particlesbackground