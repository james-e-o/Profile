'use client'
import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Preloader from '@components/preloader'
import { comment } from 'postcss'

const About = () => {
    const logo = "About"
    
    const className = "text-blue-300 font-[Tahoma] text-3xl m-0 pl-4"
    const data =  <div id="container" className="relative w-screen justify-between h-vh92 lg:h-screen bg-gradient-to-b from-gray-600 to- bg-deepSlate">
          <Nav logo={logo} color={className} prop={ret}/>
          <Mobile_menu />   
          <div>hello</div>
          
      </div>
  return (
    <Preloader data = {data}/>
  )
}

export default About