'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'

export default function Home() {
    const logo = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="50" viewBox="10 10 30 30" id="letter-j"><path d="M30 10C31.1046 10 32 10.8954 32 12V30C32 34.4183 28.4183 38 24 38C19.5817 38 16 34.4183 16 30C16 28.8954 16.8954 28 18 28C19.1046 28 20 28.8954 20 30C20 32.2092 21.7909 34 24 34C26.2091 34 28 32.2092 28 30V12C28 10.8954 28.8954 10 30 10Z"></path></svg>
    const nav_class = "relative opacity-0 py-5 px-7 flex justify-end animate-land_anime1"
    const className = "text-yellow-500 fill-yellow-500 font-sans text-5xl m-0 pt-2 pl-1"

     return (
        <div id="container" className="relative bg-deepSlate overflow-x-hidden overflow-y-auto  h-screen perspective preserve3D">
            <div id="space-parallax" className="absolute bg-deepSlate bg-cover h-full z-[-1] w-full preserve3D transformSpace">
                <div id="glare" className=" bg-[url('../public/images/nebula5.png')] bg-blend-lighten bg-contain bg-deepSlate bg-center w-[30%] top-[19vh] left-[70.2%] rounded-3xl absolute aspect-[1]  bg-no-repeat before:absolute before:left-0 before:bottom-0 before:bg-galaxyGradient overflow-clip before:z-10 before:w-full before:h-full"></div>
            </div>
            <div id="debris-parallax" className="absolute">

            </div>
           
            <header className="flex items-center justify-between px-14 pt-4 text-white">
                <div id="logo" className="text-[orange] font-PlayBall text-5xl">jo</div>
                <nav className="w-fit ">
                    <ul className="flex justify-center gap-8 text-[14px] text-[#bcbcbc] font-Manrope items-center h-full">
                        <li className="border w-fit border-[#333335] rounded-3xl px-4 py-[5px] text-[#ababab] relative overflow-clip before:absolute before:bg-[orange] before:left-0 before:w-full before:h-0 before:z-[-1] z-10 before:transition-[height_500ms_ease-in] bg-transparent hover:text-black before:hover:h-full before:bottom-0 ">About</li>
                        <li className="border w-fit border-[#333335] rounded-3xl px-4 py-[5px] text-[#ababab] relative overflow-clip before:absolute before:bg-[orange] before:left-0 before:w-full before:h-0 before:z-[-1] z-10 before:transition-[height_500ms_ease-in] bg-transparent hover:text-black before:hover:h-full before:bottom-0 ">Work</li>
                        <li className="border w-fit border-[#333335] rounded-3xl px-4 py-[5px] text-[#ababab] relative overflow-clip before:absolute before:bg-[orange] before:left-0 before:w-full before:h-0 before:z-[-1] z-10 before:transition-[height_500ms_ease-in] bg-transparent hover:text-black before:hover:h-full before:bottom-0 ">Blogs</li>
                    </ul>
                </nav>
            </header>
            <div id='intro' className="flex justify-center h-screen items-center">
                <div id="intro-wrap" className="preserve3D transform500 relative h-[300px] w-[600px] bg-transparent z-[1] before:w-[100%] flex flex-col justify-between">
                    <div id="art-head" className="h-10 w-full backdrop-blur rounded-tr-xl rounded-tl-xl flex items-center border-[#333335] border">
                        <figure className="border absolute left-10 border-[#333335] rounded-[50%] h-4 w-4 before:border before:absolute before:border-[#333335] before:rounded-[100%] before:h-4 before:w-4 before:-left-[150%]  before:top-[-1px] after:border after:absolute after:border-[#333335] after:rounded-[100%] after:h-4 after:w-4 after:left-[150%] after:top-[-1px]"></figure>
                    </div>
                    <div id="art-body" className="h-[80%] rounded-br-xl rounded-bl-xl border-[#333335] border backdrop-blur flex flex-col justify-center">
                        <div id='intro-content' className="text-white items-center font-Kdam flex flex-col justify-center">
                            <p className=" px-5 pb-1 text-gray-400">Hello</p>
                            <p className=" px-5 text-xl">I'm <span>JAMES </span><span>ONWUASOANYA</span></p>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            <CLock/>
            <div id='intro' className="flex justify-center h-screen items-center">
                <Wheel/>
            </div>
        </div>
     )
}





{/* <div id='lower-main' className="flex mt-2">
                <div id='svg-container' className="py-2 pr-3 -mt-2">            
                    <Link href="http://www.github.com/james-e-o"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link>
                    <Link href="http://www.x.com/james__e__o"><svg name="twitter" id="twitter" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg></Link>
                    <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
                    <svg id="youtube" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
                </div>
            </div> */}

            // bg-gradient-to-b from-deepSlate to- bg-deepSlate
            // bg-[url('../public/images/gray-galaxy.jpg')]

            // <svg className="relative animate-anime top-[6px] fill-gray-400" viewBox="250 250 500 500" width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 683.52a171.52 171.52 0 1 1 0-343.04 171.52 171.52 0 0 1 0 343.04z m0-317.44c-79.36 0-145.92 66.56-145.92 145.92s66.56 145.92 145.92 145.92 145.92-66.56 145.92-145.92-66.56-145.92-145.92-145.92z"  /><path d="M512 591.36c-43.52 0-81.92-35.84-81.92-81.92 0-43.52 35.84-81.92 81.92-81.92s81.92 35.84 81.92 81.92c0 46.08-38.4 81.92-81.92 81.92z m0-135.68c-30.72 0-56.32 25.6-56.32 56.32 0 30.72 25.6 56.32 56.32 56.32s56.32-25.6 56.32-56.32c0-30.72-25.6-56.32-56.32-56.32z"  /><path d="M512 455.68c-7.68 0-12.8-5.12-12.8-12.8V307.2c0-7.68 5.12-12.8 12.8-12.8s12.8 5.12 12.8 12.8v135.68c0 7.68-5.12 12.8-12.8 12.8z"  /><path d="M499.2 442.88V307.2c0-7.68 5.12-12.8 12.8-12.8s12.8 5.12 12.8 12.8v135.68h-25.6zM524.8 581.12V716.8c0 7.68-5.12 12.8-12.8 12.8s-12.8-5.12-12.8-12.8v-135.68h25.6zM581.12 499.2H716.8c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8h-135.68v-25.6zM442.88 524.8H307.2c-7.68 0-12.8-5.12-12.8-12.8s5.12-12.8 12.8-12.8h135.68v25.6zM550.4 453.12l97.28-97.28c5.12-5.12 12.8-5.12 17.92 0s5.12 12.8 0 17.92l-97.28 97.28-17.92-17.92zM473.6 570.88L376.32 665.6c-2.56 2.56-5.12 2.56-10.24 2.56s-7.68 0-10.24-2.56c-5.12-5.12-5.12-12.8 0-17.92l97.28-97.28 20.48 20.48zM453.12 473.6L358.4 376.32c-5.12-5.12-5.12-12.8 0-17.92s12.8-5.12 17.92 0l97.28 97.28-20.48 17.92zM570.88 550.4l97.28 97.28c5.12 5.12 5.12 12.8 0 17.92-2.56 2.56-5.12 2.56-10.24 2.56s-7.68 0-10.24-2.56l-97.28-97.28 20.48-17.92z"  /></svg>

            const Wheel =() =>{
                return (
                    <svg className="relative animate-anime top-[6px] fill-gray-400" viewBox="250 250 500 500" width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 683.52a171.52 171.52 0 1 1 0-343.04 171.52 171.52 0 0 1 0 343.04z m0-317.44c-79.36 0-145.92 66.56-145.92 145.92s66.56 145.92 145.92 145.92 145.92-66.56 145.92-145.92-66.56-145.92-145.92-145.92z"  /><path d="M512 591.36c-43.52 0-81.92-35.84-81.92-81.92 0-43.52 35.84-81.92 81.92-81.92s81.92 35.84 81.92 81.92c0 46.08-38.4 81.92-81.92 81.92z m0-135.68c-30.72 0-56.32 25.6-56.32 56.32 0 30.72 25.6 56.32 56.32 56.32s56.32-25.6 56.32-56.32c0-30.72-25.6-56.32-56.32-56.32z"  /><path d="M512 455.68c-7.68 0-12.8-5.12-12.8-12.8V307.2c0-7.68 5.12-12.8 12.8-12.8s12.8 5.12 12.8 12.8v135.68c0 7.68-5.12 12.8-12.8 12.8z"  /><path d="M499.2 442.88V307.2c0-7.68 5.12-12.8 12.8-12.8s12.8 5.12 12.8 12.8v135.68h-25.6zM524.8 581.12V716.8c0 7.68-5.12 12.8-12.8 12.8s-12.8-5.12-12.8-12.8v-135.68h25.6zM581.12 499.2H716.8c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8h-135.68v-25.6zM442.88 524.8H307.2c-7.68 0-12.8-5.12-12.8-12.8s5.12-12.8 12.8-12.8h135.68v25.6zM550.4 453.12l97.28-97.28c5.12-5.12 12.8-5.12 17.92 0s5.12 12.8 0 17.92l-97.28 97.28-17.92-17.92zM473.6 570.88L376.32 665.6c-2.56 2.56-5.12 2.56-10.24 2.56s-7.68 0-10.24-2.56c-5.12-5.12-5.12-12.8 0-17.92l97.28-97.28 20.48 20.48zM453.12 473.6L358.4 376.32c-5.12-5.12-5.12-12.8 0-17.92s12.8-5.12 17.92 0l97.28 97.28-20.48 17.92zM570.88 550.4l97.28 97.28c5.12 5.12 5.12 12.8 0 17.92-2.56 2.56-5.12 2.56-10.24 2.56s-7.68 0-10.24-2.56l-97.28-97.28 20.48-17.92z"  /></svg>  
                )
            }
            const CLock =() =>{
                return (
                    <svg className="absolute fill-[#333335]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"/></svg>
                )
            }