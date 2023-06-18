'use client'
import Nav from '@components/header.jsx'
import { useState,useEffect } from 'react'
import Preloader from '@components/preloader'

export default function Home() {
    
    const logo = 
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="50" viewBox="10 10 30 30" id="letter-j"><path fill-rule="evenodd" d="M30 10C31.1046 10 32 10.8954 32 12V30C32 34.4183 28.4183 38 24 38C19.5817 38 16 34.4183 16 30C16 28.8954 16.8954 28 18 28C19.1046 28 20 28.8954 20 30C20 32.2092 21.7909 34 24 34C26.2091 34 28 32.2092 28 30V12C28 10.8954 28.8954 10 30 10Z" clip-rule="evenodd"></path></svg>

    const className = "text-yellow-400 fill-yellow-500 font-sans text-5xl m-0 pt-2 pl-1"

    const data = <div onPointerMove={(e)=>{e.preventDefault()}} className="flex flex-col justify-between h-vh90 lg:h-screen overflow-hidden bg-gradient-to-b from-blue-200 to- bg-darkNavy"> 
    
        <Nav logo={logo} color={className}/>
        <main className="m-0 py-2 px-7"> 
            <div >
                <h4 className="m-0 pb-1">
                    <span className="w-3 h-3 fill-amber-800">&#128075;&#127998;</span>
                    <span className="text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-yellow-400 ">Hey There, I'm James</span>
                </h4>
                <h2 className="m-0 p-0">I am a frontend web developer</h2>
                <p id="info" className="text-gray-400 text-sm m-0 p-0">I bring web designs to life by creating impressive user experiences and reactive websites, using HTML, JavaScript, React js, CSS, Tailwind, Node js, and other Javascript based tools, packages and libraries. </p>
                <p id="CTA" 
                className="px-2 py-1 bg-blue-400 inline-block text-black text-sm font-thin">
                {/* <span className="text-2xl m-0 p-0 border-spacing-0 border-0 text-pink-400"> →</span>  */}
                View my Resume</p>
            </div> 
        </main>
        <footer className="m-0 px-4 py-2 flex justify-center">
            <div id='page-footer' className="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <svg name="twitter" id="twitter" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
                <svg id="youtube" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
            </div>
        </footer>
    </div>
     return (
        <Preloader data={data} />
  )
}
