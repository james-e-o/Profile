import React from 'react'
import Link from 'next/link'


export const Nav = ({logo,color}) => {

  
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
            <p className="font-bold text-5xl m-0 pr-4 cursor-pointer">              
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="fill-gray-200 pt-1" width="30px" height="30px"><path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z"/></svg>
            </p>
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
