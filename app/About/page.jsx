import Nav from '@components/header'

const About = () => {
  const logo = "About"
    const className = "text-white font-sans text-3xl m-0 pl-4"
  return (
    <div>
        <Nav logo={logo} color={className}/>
    </div>
  )
}

export default About