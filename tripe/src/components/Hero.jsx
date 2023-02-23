import React from 'react'
import phoneImg from '../images/phone.svg'
import {useGlobalContext} from '../context/context'

const Hero = () => {
  const data = useGlobalContext()
  console.log(data);
  return (
    <div>Hero</div>
  )
}

export default Hero