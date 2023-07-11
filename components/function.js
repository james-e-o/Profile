'use client'
export default function ret (){
    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div')
    
    popdiv.classList.add("popdiv")
    popbox.classList.add("popbox")
    inner_div.classList.add("inner_div")
    links.forEach(link=>{link.classList.add('poplink')})

    document.onclick=(e)=>{
        const popdiv = document.querySelector('#mobile-menu')
        const popbox = document.querySelector('#link-container')
        const inner_div = document.querySelector('#inner-link-container')
        if (popdiv.classList.contains('popdiv')){
            if(e.target == popdiv && e.target != popbox){
                links.forEach(link=>{link.classList.remove('poplink')})
                inner_div.classList.remove("inner_div")
                popbox.classList.remove("popbox")
                popdiv.classList.remove('popdiv')
            }
        }
    }
}

