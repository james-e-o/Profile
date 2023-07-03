'use client'
import { useState, useEffect } from 'react'
import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Pop from '@components/pop'

import Link from 'next/link'
import Preloader from '@components/preloader'

const About = () => {
    // useEffect(()=>{

    // },[])
    const logo = "About"
    const className = "text-white font-sans text-3xl m-0 pl-4"
    const data =  <div>
          <Nav logo={logo} color={className} prop={ret}/>
          <Mobile_menu />
          
      </div>
  return (
    <Preloader data = {data}/>
  )
}

export default About