import React from 'react'
import Link from 'next/link'


export const Nav = ({logo,color}) => {

  
  return (
    <header className="p-5 flex justify-between">
        <div>
          <Link href="/About">
            <h1 className={color}>{logo}</h1>
          </Link>
        </div>
      <nav>
          <div className="md:hidden">
            {/* Mobile Navigation */}
            <p className="font-bold text-5xl m-0 pr-4 cursor-pointer">=</p>
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
