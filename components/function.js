    'use client'

import Link from "next/link"

export default function ret (){
    // const layout = document.querySelector('body')
    const appdiv = document.querySelector('#container')
    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div, #copyright')
    
    appdiv.classList.toggle("test")
    popdiv.classList.toggle("popdiv")
    links.forEach(link=>{link.classList.toggle('poplink')})
    popbox.classList.toggle("popbox")
    inner_div.classList.toggle("inner_div")

    const linkArr = Array.from(links)
    
    links.forEach(link => {
        link.addEventListener('click',e=>{
        if (popdiv.classList.contains('popdiv') && linkArr.indexOf(link)!==link.id){
                inner_div.classList.toggle("inner_div")
                popbox.classList.toggle("popbox")
                links.forEach(link=>{link.classList.toggle('poplink')})
                appdiv.classList.toggle("test")
                popdiv.classList.toggle('popdiv')
                console.log(linkArr.indexOf(link), link.id)
        }
        // else if (popdiv.classList.contains('popdiv') && linkArr.indexOf(link)===link.id){

        // }
    })}),

    document.onclick =(e)=>{
        if (popdiv.classList.contains('popdiv') && e.target == popdiv && e.target != inner_div){
                inner_div.classList.toggle("inner_div")
                popbox.classList.toggle("popbox")
                links.forEach(link=>{link.classList.toggle('poplink')})
                appdiv.classList.toggle("test")
                popdiv.classList.toggle('popdiv')
        }
    }
    // document.onpointerdown = dissolve
    // document.onclick = dissolve
    // document.onpointermove = dissolve

    
}

