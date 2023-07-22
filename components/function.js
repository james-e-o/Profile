    'use client'
import { useState } from "react"
import Link from "next/link"

export default function ret (){
    // When the modal(mobile menu) is shown, we want a fixed body
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    const popdiv = document.querySelector('#mobile-menu')
    const popbox = document.querySelector('#link-container')
    const inner_div = document.querySelector('#inner-link-container')
    const links = document.querySelectorAll('#inner-link-container div')
    
    popdiv.classList.toggle("popdiv")
    links.forEach(link=>{link.classList.toggle('poplink')})
    popbox.classList.toggle("popbox")
    inner_div.classList.toggle("inner_div")

    links.forEach(link => {
        link.addEventListener('click',e=>{
            document.body.style.position = 'static';
            document.body.style.top = '';
    })}),

    document.onclick =(e)=>{
        if (popdiv.classList.contains('popdiv') && e.target == popdiv && e.target != inner_div){
            // When the modal(mobile menu) is hidden, we want to remain at the top of the scroll position
                document.body.style.position = 'static';
                document.body.style.top = '';
                inner_div.classList.toggle("inner_div")
                popbox.classList.toggle("popbox")
                links.forEach(link=>{link.classList.toggle('poplink')})
                popdiv.classList.toggle('popdiv')
        }
    }

}

