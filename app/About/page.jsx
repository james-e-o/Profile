'use client'
import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Preloader from '@components/preloader'
import { comment } from 'postcss'


const About = () => {
    const logo = "About"
    const nav_class = "relative opacity-0 py-5 px-7 flex font-Russo_One justify-end animate-land_anime1 bg-white"
    const h1_class = "text-gray-400 text-3xl m-0 pl-4"
    const data = <div id="container" className="relative w-screen bg-skyblue justify-between h-[2800px] lg:h-screen">
          <Nav logo= {logo} nav_class={nav_class} color={h1_class} prop={ret}/>
          <Mobile_menu />
          <div className="p-5 font-Russo_One">hello</div>
      </div>
  return (
    <Preloader data = {data}/>
  )
}

export default About