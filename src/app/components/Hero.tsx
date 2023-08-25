import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section>
      <h1>Boa leitura, Patrique</h1>
      <p className='text-lg font-semibold'>Parabéns, você está evoluindo muito na sua meta!       
      </p>
      <a href="#" className='btn'>
         Explorar
        <HiArrowUpRight /> 
       </a>
    </section>
  )
}

export default Hero