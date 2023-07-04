import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Preloader from '@components/preloader'

const About = () => {
    const logo = "My Builds"
    const className = "text-yellow-300 font-sans text-3xl m-0 pl-4"
    const data =  <div className="relative flex flex-col justify-between h-vh92 lg:h-screen bg-gradient-to-b from-gray-600 to- bg-slate-950">
        <Nav logo={logo} color={className} prop={ret}/>
        <Mobile_menu />  
    </div>
  return (
    <Preloader data={data} />
  )
}

export default About