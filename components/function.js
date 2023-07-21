    'use client'
import { useState } from "react"
import Link from "next/link"

export default function ret (){
    // const appdiv = document.querySelector('#container')
    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div')
    
    // appdiv.classList.toggle("test")
    popdiv.classList.toggle("popdiv")
    links.forEach(link=>{link.classList.toggle('poplink')})
    popbox.classList.toggle("popbox")
    inner_div.classList.toggle("inner_div")

    document.onclick =(e)=>{
        if (popdiv.classList.contains('popdiv') && e.target == popdiv && e.target != inner_div){
                inner_div.classList.toggle("inner_div")
                popbox.classList.toggle("popbox")
                links.forEach(link=>{link.classList.toggle('poplink')})
                popdiv.classList.toggle('popdiv')
                // appdiv.classList.toggle("test")
        }
    }

}

