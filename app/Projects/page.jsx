import Nav from '@components/header'

const About = () => {
  const logo = "My Builds"
    const className = "text-blue-300 font-sans text-3xl m-0 pl-4"
  return (
    <div>
        <Nav logo={logo} color={className}/>
    </div>
  )
}

export default About