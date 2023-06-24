import React from 'react'
import Link from 'next/link'


export const Nav = ({logo,color,prop}) => {

  
  return (
    <header className="py-4 px-6 flex justify-between">
        <div>
          <Link href="/About" className="no-underline appearance-none">
            <h1 className={color}>{logo}</h1>
          </Link>
        </div>
        <nav>
          <div className="md:hidden">
            {/* Mobile Navigation */}
            <div id='svg' onClick={prop}>              
               <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" width="30px" height="30px" className="cursor-pointer fill-gray-200 pt-1" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
            </div>
          </div>

          <div className="hidden md:flex">
          {/*desktop Navigation */}
              <Link href="#"><div>Home</div></Link>
              <Link href="#"><div>About</div></Link>
              <Link href="#"><div>Projects</div></Link>
              <Link href="#"><div>Blog</div></Link>
              <Link href="#"><div>Mail</div></Link>
          </div>                
        </nav>
    </header>
  )
}
export default Nav
