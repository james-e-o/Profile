import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <h1 className='bg-red'>J</h1> 
      
      <i class="fa-solid fa-bars"></i>
      <nav class=''>
        <Link rel="stylesheet" href="/" >Home</Link>
        <Link rel="stylesheet" href="/About" >About</Link>
        <Link rel="stylesheet" href="/Projects" >Projects</Link>
        <Link rel="stylesheet" href="/Blogs" >Blogs</Link>
        <Link rel="stylesheet" href="/Email" >Mail</Link>
      </nav>
  </header>
  )
}
export default Header
