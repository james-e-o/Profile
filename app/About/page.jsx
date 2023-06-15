import Nav from '@components/header'
import Preloader from '@components/preloader'

const About = () => {
    const logo = "About"
    const className = "text-white font-sans text-3xl m-0 pl-4"
    const data =  <div>
          <Nav logo={logo} color={className}/>
      </div>
  return (
    <Preloader data = {data}/>
  )
}

export default About