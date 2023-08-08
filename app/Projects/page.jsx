'use client'
import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Preloader from '@components/preloader'

const About = () => {
    const logo = "My Builds"
    const nav_class = "relative opacity-0 py-5 px-7 flex justify-end animate-land_anime1"
    const className = "text-yellow-300 font-sans text-3xl m-0 pl-4"
    const data =  <div id="container" className="relative w-screen flex flex-col justify-between h-vh92 lg:h-screen bg-gradient-to-b from-slate-600 to- bg-deepSlate">
         <Nav logo= {logo} nav_class={nav_class} color={className} prop={ret}/>
        <Mobile_menu /> 
       
           
  </div>
  return (
    <Preloader data={data} />
  )
}

export default About