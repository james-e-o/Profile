import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      
      <div>
        {/* Mobile Navigation */}
        menu
      </div>

      <div className="hidden md:flex">
      {/*desktop Navigation */}
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Blog</Link>
          <Link href="#">mail</Link>
      </div>
          
                
      
  </nav>
  )
}
export default Nav
