'use client'


const Pop = () => {
  
    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div')
    
    popdiv.classList.add("popdiv")
    popbox.classList.add("popbox")
    inner_div.classList.add("inner_div")
    links.forEach(link=>{link.classList.add('links')})
}

export default Pop