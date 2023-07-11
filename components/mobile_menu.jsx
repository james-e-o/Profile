import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'

const Mobile_menu = () => {
const currentRoute = usePathname()
  return (
    <div id="mobile-menu" className="mobile_menu">
            <div id="link-container" className="link-container">
                <div id="inner-link-container" className="inner-link-container">
                    <div className="links"><Link href="/"  className={currentRoute === "/" ? "m-link active" : "text-white m-link"}>Home</Link></div>
                    <div className="links mt-5"><Link href="/About" className={currentRoute === "/About" ? "m-link active" : "text-white m-link"}>About</Link></div>
                    <div className="links mt-5"><Link href="/Projects" className={currentRoute === "/Projects" ? "m-link active" : "text-white m-link"}>Projects</Link></div>
                    <div className="links mt-5"><Link href="/Blogs" className={currentRoute === "/Blogs" ? "m-link active" : "text-white m-link"}>Blog</Link></div>
                </div>
            </div> 
            <div className=" mx-2 mt-16 flex flex-col items-center"><Link href="#" className="text-white no-underline">
                 <span className="text-xs font-thin"><span className="text-sm m-0 p-0 border-spacing-0 border-0 text-gray-400"> →</span>onwuasoanyajames@gmail.com</span>
                </Link>
                <span className="text-gray-400 text-xs italic font-thin"><span className="text-blue-300"><Link href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt">MIT Licence</Link></span> &#169;2023 James Onwuasoanya. | All rights reserved.</span>
            </div>           
        </div>
  )
}

export default Mobile_menu