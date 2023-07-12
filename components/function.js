'use client'
export default function ret (){
    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div')
    
    popdiv.classList.toggle("popdiv")
    links.forEach(link=>{link.classList.toggle('poplink')})
    popbox.classList.toggle("popbox")
    inner_div.classList.toggle("inner_div")

    document.onclick=(e)=>{
        const popdiv = document.querySelector('#mobile-menu')
        const popbox = document.querySelector('#link-container')
        const inner_div = document.querySelector('#inner-link-container')
        if (popdiv.classList.contains('popdiv')){
            if(e.target == popdiv && e.target != popbox){
                inner_div.classList.toggle("inner_div")
                popbox.classList.toggle("popbox")
                links.forEach(link=>{link.classList.toggle('poplink')})
                popdiv.classList.toggle('popdiv')
            }
        }
    }
}

