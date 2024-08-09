'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import Image from 'next/image'
// import profilepix from "../public/images/profilepix1.jpg"
import levelup from "../public/images/level-upfront-hackathon.png"
import getlink from "../public/images/getlinkedai-shot.png"
import skriptn from "../public/images/skr.png"
import counter from "../public/images/counterdown.png"

export default function Home() {
  
    useEffect(()=>{

        const stack = document.querySelector(".stack")
        const sections = document.querySelectorAll(".section")
        let stackTop = stack.getBoundingClientRect().top
                let windowHeight = window.innerHeight
                if (!stack.classList.contains("animate-drop_anime") && stackTop + 60 < windowHeight )
                {   
                    stack.classList.add("animate-drop_anime")
                }
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top
            let windowHeight = window.innerHeight
            console.log('fine boy')
            if (sectionTop + 100 <= windowHeight )
            {   
                section.classList.add("animate-land_anime1")
            }
        })
        window.onscroll =() => {
            sections.forEach(section => {
                let sectionTop = section.getBoundingClientRect().top
                let windowHeight = window.innerHeight
                if (!section.classList.contains("animate-land_anime1") && sectionTop + 60 < windowHeight )
                {   
                    section.classList.add("animate-land_anime1")
                }
            })
            let stackTop = stack.getBoundingClientRect().top
            let windowHeight = window.innerHeight
            if (!stack.classList.contains("animate-drop_anime") && stackTop + 60 < windowHeight )
            {   
                stack.classList.add("animate-drop_anime")
            }
        }        
    })
    return (
        <div id="container" className=" relative w-screen overflow-x-hidden ">
                
                <div className='bg-skillGradient relative -z-[0] sm:z-0 snap-y w-screen sm:overflow-hidden overflow-x-hidden '>
                    <div id="hero" className="mt-3 sm:mt-0 gap-1 justify-between items-center max-w-[83rem] sm:h-fit mx-auto px-2 sm:px-5 md:px-10 pb-12 sm:py-9 sm:flex-row flex-col flex" >
                            <div className=" gap-1 min-w-[60%] section top-[2.21rem] opacity-0 animate-land_anime1 pb-2 justify-center snap-start sm:pb-20 px-3 h-[80vh] sm:h-fit md:px-5 flex flex-col ">
                                <p className=" inline-block w-fit sm:mb-3 sm:text-lg origin-[70%_90%] animate-wave_anime">{wave}</p>
                                <p className=" px-[2px] w-fit font-light text-sm lg:text-[1.13rem] font-Righteous ">Hello, I'm <span className=" text-yellow-800 font-normal"> James Onwuasoanya.</span></p>
                            
                                <h1 className=" pt-4 pb-2 font-bold inline-block font-Manrope text-[2.35rem] lg:text-5xl text-violet-800 leading-[1.1]"> <span className="font-light text-[gray] font-Manrope">I'm a <br className='sm:hidden'></br> </span> full-stack <br className='hidden sm:block'></br>Web Developer<span className="text-orange-400">.</span></h1>
                            

                                <div className="text-[0.784rem] lg:text-[0.94rem] font-Manrope text-gray- inline-block mb-3 max-w-[92%] sm:max-w-[80%] mt-4 font-extralight"><Sqdot/> I Bring web designs and to life, building user-friendly applications for unique user expirience. <Sqdot/> I work on both sides of the web development spectrum, creating structured components for seamless api integeration.</div>


                                <p className='flex justify-start gap-5 mt-4 items-center'>
                                    <Link href={"/contact"}><button className="relative before:h-full before:right-0 before:top-0 before:left-0 z-0 before:bg-orange-400 before:-z-10 before:absolute px-3 lg:px-5 py-1 lg:py-2 w-fit text-[0.81rem] border-orange-400 border-[3px] hover:before:right-full font-semibold hover:text-gray-600 bg-white text-white font-Lato transition-[_right_250ms_ease-out_]" ><span className='z-20'>Contact me</span></button></Link>
                                    <Link href={"#projects"}><button className="relative before:h-full before:right-full before:top-0 before:left-0 z-0 before:bg-orange-400 before:-z-10 before:absolute px-3 lg:px-5 py-1 lg:py-2 w-fit text-[0.81rem] border-orange-400 border-[3px] hover:before:right-0 font-semibold hover:text-white bg-white text-gray-600 font-Lato transition-[_right_250ms_ease-out_]" ><span className='z-20'>-- View my Projects</span></button></Link>
                                </p>

                                
                            </div>

                            <div className="opacity-0 top-[2.21rem] stack pb-7 pt-1 sm:py-12  px-2 md:px-4 gap-16 snap-center justify-center h-[5 0vh] sm:h-fit flex-col items-center mt-16 rounded-3xl sm:mt-2 flex-grow">
                            <p className='font-extralight sm:hidden max-w-[83rem] mx-auto font-Orbitron text-gray-400 text-center items-center mt-1 pb-7 text-3xl'>Skills</p>
                                <div className='grid grid-cols-3 text-center sm:block'>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>CSS3</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous text-start"><span>JavaScript</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>React</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Node</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Next.js</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Tailwind</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>MongoDb</span></p>
                                    {/* <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.71rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-3 lg:m-4 text-orange-400 inline-block font-Righteous"><span>PostgreSql</span></p> */}
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-3 lg:m-4 text-orange-400 inline-block font-Righteous"><span>GitHub</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-2 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Git</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-3 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Firebase</span></p>
                                    <p className="px-2 py-1 lg:px-4 lg:py-2 text-[0.8rem] lg:text-[1.13rem] bg-white shadow-md rounded-md m-3 lg:m-4 text-orange-400 inline-block font-Righteous"><span>Bubble.io</span></p>
                                </div>
                            </div>

                    </div>
                </div>
            
            
            <div id="projects" className="before:absolute before:opacity-50 bg-white before:w-52 snap-start before:-z-10 before:h-64 before:rounded-full before:bg-violet-400 before:blur-2xl overflow-hidden border-t border-gray-300 z-10 before:top-4 before:left-5 backdropState-blur-md  relative">
            <p className='font-extralight max-w-[83rem] mx-auto font-Orbitron text-gray-400 text-center box-border px-8 pt-8 text-3xl'>Projects</p>
                        <div className="opacity-0 top-[2.1rem] section grid sm:gap-x-24 justify-items-center gap-y-10 sm:gap-y-24 sm:grid-cols-2 my-5 max-w-[83rem] mx-auto py-1 px-10 ">

                            <div id="project" className='inline-flex flex-col justify-center gap-0 h-fit my-10'>
                                <div className=' rounded-ss-3xl border-gray-700 before:z-0 before:bg-[url("../public/images/level-upfront-hackathon.png")] overflow-clip relative before:absolute before:inset-0 before:bg-transparent before:blur-sm py-3 box-border before:bg-cover bg-no-repeat bg-slate-600 border h-fit flex justify-center items-center max-h-80' >
                                    <figure className='w-4/5 z-10 h-3/5'>
                                        <Image className='rounded-2xl'
                                            src={levelup}
                                            width='100%'
                                            height='100%'
                                            alt="Picture of the author"
                                        />
                                    </figure>
                                </div>
                                <div className='flex font-Manrope flex-col justify-between p-3 border rounded-ee-2xl h-fit border-gray-700 w-fit backdropState-blur-sm bg-next1'>
                                    <p className='p-1 font-bold font-Inter text-base'>Shopify setup clone.</p>
                                    <p className='p-1 text-xs md:text-sm'>A pixel perfect and responsive clone of shopify store setup page using vanilla css & javascript from a figma design</p>
                                    <div className='ml-1 mb-2'>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>html</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>css</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>javascript</p>
                                    </div>
                                    <p className='p-1 mt-1 ml-1 flex justify-start gap- sm:gap-4 items-center'>
                                        <Link href={'https://github.com/james-e-o/Level-Upfront-Hackathon'}><span className='project'>{github}</span></Link>
                                        <Link href={'https://level-upfront-hackathon-nine.vercel.app/'} ><span className='project'>{newlink}</span></Link>
                                        <Link href={'https://www.figma.com/community/file/1307708563350137813/level-up-front-hackathon'} ><span className='project'>{figma}</span></Link>
                                    </p>
                                </div>
                            </div>
                            
                            <div id="project" className='inline-flex flex-col justify-center gap-0 h-fit my-10'>
                                <div className=' rounded-ss-3xl border-gray-700 before:z-0 before:bg-[url("../public/images/getlinkedai-shot.png")] overflow-clip relative before:absolute before:inset-0 before:bg-transparent before:blur-sm py-3 box-border before:bg-cover bg-no-repeat bg-slate-600 border h-fit flex 
                                justify-center items-center max-h-80' >
                                    <figure className='w-4/5 z-10 h-3/5'>
                                        <Image className='rounded-2xl'
                                            src={getlink}
                                            width='100%'
                                            height='100%'
                                            alt="Picture of the author"
                                        />
                                    </figure>
                                </div>
                                <div className='flex font-Manrope flex-col justify-between p-3 border rounded-ee-2xl h-fit border-gray-700 w-fit backdropState-blur-sm bg-next1'>
                                    <p className='p-1 font-bold font-Inter text-base'>GetLinked AI.</p>
                                    <p className='p-1 text-xs md:text-sm'>Hackathon to build a fully responsive website from a design and connect the page forms to a backend rest api to signify onboarding.</p>
                                    <div className='ml-1 mb-2'>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>reactjs</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>tailwind</p>
                                       
                                    </div>
                                    <p className='p-1 mt-1 ml-1 flex justify-start gap- sm:gap-4 items-center'>
                                        <Link href={'https://github.com/james-e-o/getLinked.aiHackathon'}><span className='project'>{github}</span></Link>
                                        <Link href={'https://get-linked-ai-hackathon-james-e-o.vercel.app/'} ><span className='project'>{newlink}</span></Link>
                                        <Link href={'https://www.figma.com/file/5WXTnOu1Yy7vjCDCGKSnib/Getlinked?type=design&node-id=0-1&mode=design&t=YfB0JBrgpquQFDwm-0'} ><span className='project'>{figma}</span></Link>
                                    </p>
                               </div>
                            </div>

                            <div id="project" className='inline-flex flex-col justify-center gap-0 h-fit my-10'>
                                <div className=' rounded-ss-3xl border-gray-700 before:z-0 before:bg-[url("../public/images/skr.png")] overflow-clip relative before:absolute before:inset-0 before:bg-transparent before:blur-sm py-3 box-border before:bg-cover bg-no-repeat bg-slate-600 border h-fit flex 
                                justify-center items-center max-h-80' >
                                    <figure className='w-4/5 z-10 h-3/5'>
                                        <Image className='rounded-2xl'
                                            src={skriptn}
                                            width='100%'
                                            height='100%'
                                            alt="Picture of the author"
                                        />
                                    </figure>
                                </div>
                                <div className='flex font-Manrope flex-col justify-between p-3 border rounded-ee-2xl h-fit border-gray-700 w-fit backdropState-blur-sm bg-next1'>
                                    <p className='p-1 font-bold font-Inter text-base'>Blog/Newsletter Application.</p>
                                    <p className='p-1 text-xs md:text-sm'>Ongoing project to build a blog/newsletter application, enabling features similar to related platforms like medium, hashnode and substack.</p>
                                    <div className='ml-1 mb-2'>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>reactjs</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>css</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>expressjs</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>mongodb</p>
                                       
                                    </div>
                                    <p className='p-1 mt-1 ml-1 flex justify-start gap- sm:gap-4 items-center'>
                                        <Link href={'https://github.com/james-e-o/Blog-Manager'}><span className='project'>{github}</span></Link>
                                        <Link href={'https://skriptn.netlify.app/'} ><span className='project'>{newlink}</span></Link>
                                       
                                    </p>
                               </div>
                            </div>  


                            <div id="project" className='inline-flex flex-col justify-center gap-0 h-fit my-10'>
                                <div className=' rounded-ss-3xl border-gray-700 before:z-0 before:bg-[url("../public/images/counterdown.png")] overflow-clip relative before:absolute before:inset-0 before:bg-transparent before:blur-sm py-3 box-border before:bg-cover bg-no-repeat bg-slate-600 border h-fit flex 
                                justify-center items-center max-h-80' >
                                    <figure className='w-4/5 z-10 h-3/5'>
                                        <Image className='rounded-2xl'
                                            src={counter}
                                            width='100%'
                                            height='100%'
                                        />
                                    </figure>
                                </div>
                                <div className='flex font-Manrope flex-col w-full justify-between p-3 border rounded-ee-2xl h-fit border-gray-700 w-fit backdropState-blur-sm bg-next1'>
                                    <p className='p-1 font-bold font-Inter text-base'>Countdown Timer.</p>
                                    <p className='p-1 text-xs md:text-sm'>A countdown timer as part of my javascript beginner projects</p>
                                    <div className='ml-1 mb-2'>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>html5</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>css</p>
                                        <p className='font-[monospace] text-[0.63rem] inline-block px-[0.25rem] py-[0.063rem] rounded-md bg-gray-300  mr-4 border-gray-400 border'>javascript</p>
                                    </div>
                                    <p className='p-1 mt-1 ml-1 flex justify-start gap- sm:gap-4 items-center'>
                                        <Link href={'https://github.com/james-e-o/Countdown-Timer'}><span className='project'>{github}</span></Link>
                                        <Link href={'https://qingtech.netlify.app/'} ><span className='project'>{newlink}</span></Link>
                                       
                                    </p>
                               </div>
                            </div>                                
                        </div> 
            </div>
            
            <div id="footer" className=" bg-orange-400 fill-white backdropState-blur-md  relative  gap-10 justify-between items-start px-5 py-4 flex">
                        <div className="mt-5 max-w-[83rem] mx-auto pb-5 px-5">
                                <div className='opacity-0 top-[2.1rem] section flex justify-center flex-col sm:flex-row'>
                                    <p className='p-3 flex justify-center gap-6 items-center '>
                                        <Link href={'https://github.com/james-e-o'}><span>{github}</span></Link>
                                        <Link href={'https://www.linkedin.com/in/james-onwuasoanya-96272b200/'}><span>{linkedin}</span></Link>
                                        <Link href={'https://theastutedev.substack.com/'}><span>{substack}</span></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
            
        </div>
     )
}






const twitter = <svg name="twitter" id="twitter" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"> <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>

const figma = <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 48 48">
<path d="M17.026 46L17.026 46c-3.866 0-7-3.134-7-7l0 0c0-3.866 3.134-7 7-7h5c1.105 0 2 .895 2 2v5C24.026 42.866 20.892 46 17.026 46zM32.5 17A6.5 6.5 0 1032.5 30 6.5 6.5 0 1032.5 17zM33.5 15c3.656 0 6.607-3.019 6.497-6.7C39.89 4.743 36.787 2 33.227 2L28 2c-1.105 0-2 .895-2 2v9c0 1.105.895 2 2 2H33.5zM16.5 2c-3.656 0-6.607 3.019-6.497 6.7.107 3.557 3.21 6.3 6.77 6.3L22 15c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H16.5zM16.5 17c-3.656 0-6.607 3.019-6.497 6.7.107 3.557 3.21 6.3 6.77 6.3L22 30c1.105 0 2-.895 2-2v-9c0-1.105-.895-2-2-2H16.5z"></path>
</svg>

const github = <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" viewBox="-2 -2 29 29"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const newlink = <svg id="newlink" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
const linkedin = <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="31px" height="31px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
const substack = <svg role="img" width="22" height="22" viewBox="0 0 16 18" strokeWidth="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg"><g><title></title><path d="M16 4H0V6H16V4Z"></path><path d="M0 8V18L7.9993 13.534L16 18V8H0Z"></path><path d="M16 0H0V2H16V0Z"></path></g></svg>
const wave = <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 80 80" fill="none"><path d="M44.8965 37.3225C45.7322 38.2432 46.4789 39.4482 46.1607 39.7665C45.8425 40.0847 44.8668 39.5076 44.1201 38.7609C43.3735 38.0141 41.5917 45.9484 41.4178 46.3514C41.2905 46.6527 39.2117 49.0287 38.1257 51.2944C37.7651 52.0497 37.816 54.3239 37.6803 54.4596C37.133 55.007 36.4457 54.9476 34.9482 53.6238C33.4549 52.3 32.6785 60.1706 34.4603 61.4138C37.5063 63.5395 43.6026 71.9956 51.6503 71.9956C60.9622 71.9956 69.5869 62.2793 69.5869 55.147C69.5869 48.0189 67.4954 45.3119 67.6312 39.3337C67.7457 34.2719 71.4239 31.8577 71.4239 29.3289C71.4239 27.2032 68.2633 26.6855 67.2282 26.6855C65.387 26.6855 60.6738 29.0446 60.6738 35.252C60.6738 37.6662 59.9823 39.8513 57.5132 39.8513C55.0442 39.8513 52.2824 36.457 50.6152 33.8136" fill="url(#paint0_linear)"/><path d="M71.4324 29.3289C71.4324 28.1706 70.4991 27.4917 69.4767 27.1099C70.6985 31.1661 64.4919 31.3443 64.4919 45.172C64.4919 58.9996 56.4442 63.0219 53.1097 63.7135C49.7752 64.4051 43.8995 64.6045 39.4281 59.1142C38.0536 57.4297 36.1912 55.5968 34.1252 53.8657C33.2512 55.3295 33.0646 60.4337 34.4688 61.4138C37.5148 63.5395 43.6111 71.9957 51.6588 71.9957C60.9708 71.9957 69.5955 62.2794 69.5955 55.147C69.5955 48.0189 67.504 45.312 67.6397 39.3337C67.75 34.2761 71.4324 31.8619 71.4324 29.3289Z" fill="url(#paint1_linear)"/><path d="M34.9525 53.6237C33.4592 52.2999 29.9212 48.5364 27.6218 46.695C25.3225 44.8536 23.3116 44.879 21.9286 46.9072C20.5499 48.9353 24.5716 52.5036 25.4922 53.4243C26.9006 54.833 32.6787 60.1706 34.4604 61.418" fill="url(#paint2_linear)"/><path d="M41.4177 46.3517C41.2438 46.7548 40.0729 47.0306 37.7396 44.4933C35.9578 42.5543 31.1852 36.9791 28.3683 34.4461C25.5514 31.9173 23.3666 30.8821 21.5254 32.2016C19.6842 33.5254 20.7321 36.279 22.7896 38.5829C25.335 41.4299 28.2622 44.3321 31.0664 47.1197C33.2597 49.3005 38.2232 53.9041 37.676 54.4514" fill="url(#paint3_linear)"/><path d="M50.6195 33.8137C48.9522 31.1704 42.1093 22.6591 40.442 20.2449C38.7748 17.8307 36.5306 17.8307 34.9821 18.9211C33.4294 20.0115 32.9712 22.1966 36.4627 26.8426C38.6645 29.7702 40.5014 32.4687 44.9007 37.3226L50.017 36.9662L50.6195 33.8137Z" fill="url(#paint4_linear)"/><path d="M44.1202 38.761C43.3736 38.0143 36.764 30.1776 35.2664 28.4974C32.4623 25.3491 28.9114 18.6071 24.6733 21.6111C22.4461 23.1895 23.6509 25.4764 24.2872 26.3971C24.9193 27.3178 33.141 36.805 33.9471 37.6112C34.7531 38.4173 41.5918 45.9485 41.4221 46.3516" fill="url(#paint5_linear)"/><path d="M31.0709 47.1282C33.1411 49.186 37.6762 53.3992 37.7228 54.3284C38.3762 53.3059 37.1798 50.2765 35.9156 49.2115C28.6146 43.0593 21.5553 33.1436 20.6602 33.4406C20.2741 34.8832 21.2499 36.8646 22.7941 38.5915C25.3352 41.4342 28.2667 44.3406 31.0709 47.1282Z" fill="url(#paint6_linear)"/><path d="M44.8965 37.3225C45.6983 38.205 46.4153 39.3548 46.1904 39.724C48.8588 37.577 43.2165 31.2763 40.0221 27.4916C37.5488 24.564 36.8785 20.8387 35.1052 18.8403C35.0628 18.8658 35.0204 18.8955 34.978 18.9252C33.4253 20.0156 32.9671 22.2007 36.4585 26.8467C38.6645 29.7743 40.4972 32.4686 44.8965 37.3225Z" fill="url(#paint7_linear)"/><path d="M33.9471 37.6112C34.7532 38.4173 41.5918 45.9485 41.4221 46.3516C43.5348 43.5046 35.3429 35.1376 31.3763 30.9116C27.9357 27.2457 27.346 24.0381 23.9903 22.2349C22.7431 23.7411 23.7358 25.591 24.2873 26.3972C24.9194 27.3179 33.1411 36.805 33.9471 37.6112Z" fill="url(#paint8_linear)"/><path d="M41.2653 46.5173C41.0234 46.6658 40.5312 46.6785 39.7717 46.2373C40.336 46.6997 40.8622 46.8737 41.2653 46.5173Z" fill="url(#paint9_linear)"/><path d="M26.5017 61.6179C26.4508 61.6179 26.3999 61.6094 26.349 61.5967C21.1012 59.9971 15.4165 54.2606 14.1819 49.3219C14.1141 49.0461 14.2795 48.7618 14.5595 48.6939C14.8353 48.626 15.1195 48.7915 15.1874 49.0715C16.3243 53.6242 21.7885 59.1231 26.6502 60.6081C26.9217 60.6929 27.0787 60.9815 26.9939 61.253C26.926 61.4737 26.7223 61.6179 26.5017 61.6179Z"/><path d="M29.0005 68.1304C28.9623 68.1304 28.9242 68.1261 28.8817 68.1177C24.5376 67.1078 19.4934 63.862 15.039 59.216C10.873 54.8713 8.17485 50.2507 8.00092 47.1576C7.98395 46.8733 8.20455 46.6273 8.48879 46.6103C8.77302 46.5933 9.01908 46.814 9.03604 47.0982C9.19301 49.9113 11.8445 54.3876 15.7856 58.499C20.1043 63.0049 24.966 66.1405 29.1193 67.1078C29.3993 67.1715 29.569 67.4515 29.5053 67.7273C29.4502 67.9692 29.2381 68.1304 29.0005 68.1304Z" fill="black"/><path d="M51.2516 22.8334C51.0225 22.8334 50.8147 22.6806 50.751 22.4473C50.0213 19.6851 46.7165 15.718 43.7045 14.9373C43.4287 14.8652 43.2633 14.5851 43.3311 14.3051C43.4032 14.0293 43.6833 13.8638 43.9633 13.9317C47.3571 14.81 50.9334 19.0869 51.7522 22.18C51.8243 22.4558 51.6589 22.74 51.3831 22.8122C51.3407 22.8291 51.294 22.8334 51.2516 22.8334Z" /><path d="M57.7764 23.7538C57.5473 23.7538 57.3352 23.5968 57.2758 23.3635C55.3328 15.7262 48.0826 9.76918 43.9463 9.02667C43.6663 8.97576 43.4797 8.70844 43.5306 8.42417C43.5815 8.14413 43.8488 7.95745 44.133 8.00837C48.6469 8.81877 56.2109 14.9583 58.2854 23.1089C58.3576 23.3847 58.1879 23.669 57.9121 23.7369C57.8612 23.7496 57.8188 23.7538 57.7764 23.7538Z" fill="#955500"/><path d="M67.7246 27.5472C69.4809 27.2332 69.7906 27.4326 69.4766 27.1102C68.6197 26.7919 67.7076 26.6816 67.2367 26.6816C65.3955 26.6816 60.6823 29.0407 60.6823 35.2481C60.6823 37.6623 59.9908 39.8474 57.5217 39.8474C56.546 39.8474 55.5278 39.3171 54.5479 38.5194C58.8878 43.3266 62.2944 38.7994 62.8119 35.6936C63.3295 32.5878 62.5744 28.4764 67.7246 27.5472Z" fill="url(#paint10_radial)"/><path d="M34.4476 19.3921C33.3743 20.6056 33.4082 22.7864 36.4584 26.8426C38.6602 29.7703 40.4972 32.4687 44.8965 37.3226C45.7322 38.2434 46.4789 39.4483 46.1607 39.7666C46.8946 34.7345 39.7378 29.7915 37.4087 25.9941C35.5676 22.9901 35.1985 21.2165 34.4476 19.3921Z" fill="url(#paint11_linear)"/><path d="M33.9471 37.6115C34.7531 38.4176 41.5918 45.9488 41.4221 46.3519C42.9324 45.2742 41.9015 43.5982 39.5682 41.2646C34.7871 36.4829 28.1308 30.0548 25.4539 24.7639C25.1994 24.2632 24.7327 23.8941 24.1769 23.822C22.7345 23.6353 23.8036 25.6973 24.2872 26.4017C24.9194 27.3181 33.141 36.8053 33.9471 37.6115Z" fill="url(#paint12_linear)"/><path d="M22.794 38.5869C25.3394 41.4339 28.2666 44.3361 31.0708 47.1237C33.2641 49.3045 38.2276 53.9081 37.6804 54.4554C40.7561 51.8673 26.4679 42.5031 20.6559 33.436C20.2741 34.8786 21.2498 36.8601 22.794 38.5869Z" fill="url(#paint13_linear)"/><path d="M37.0523 54.9778C37.345 54.8632 37.4978 54.7274 37.5444 54.5789C37.0184 54.9863 36.3226 54.8378 34.9523 53.6243C33.459 52.3005 29.9209 48.537 27.6215 46.6956C26.6118 45.8852 25.6573 45.4397 24.7876 45.3633C26.0349 46.1397 25.4579 46.424 28.2282 48.5497C29.7088 49.6868 35.1517 55.7245 37.0523 54.9778Z" fill="url(#paint14_linear)"/><path d="M33.4295 41.1752C35.4488 43.6319 39.3857 47.6924 41.1548 46.568C40.6669 46.7335 39.5554 46.4662 37.7397 44.489C35.9579 42.55 31.1853 36.9748 28.3684 34.4417C26.086 32.3924 24.2193 31.3232 22.6157 31.6966C27.2908 33.241 31.5162 38.8501 33.4295 41.1752Z" fill="url(#paint15_linear)"/><path d="M35.6143 30.5931C38.8385 34.0978 43.6154 41.0476 46.042 39.8342C45.6433 39.9572 44.7905 39.4268 44.1245 38.7607C43.3778 38.014 36.7683 30.1773 35.2707 28.4971C33.3277 26.3163 31.0284 22.4128 28.3896 21.2163C31.0496 23.3123 33.0011 27.7546 35.6143 30.5931Z" fill="url(#paint16_linear)"/><path d="M54.5435 38.5236C53.0375 37.2932 51.6291 35.4178 50.6194 33.814C48.9521 31.1707 42.1093 22.6594 40.442 20.2452C39.933 19.5111 39.3729 18.9978 38.7917 18.6753C39.5681 19.7912 40.0051 21.3823 41.7614 23.351C44.5783 26.512 48.2564 32.2059 49.5248 34.1619C50.7891 36.1137 52.8296 40.2378 54.5435 38.5236Z" fill="url(#paint17_linear)"/><path d="M63.7665 66.586C62.7187 64.0402 61.1914 62.4916 58.9812 63.9469C52.9528 67.914 46.0166 66.5775 37.324 59.547C29.569 53.2759 25.56 48.7912 21.7885 47.1704C20.8849 49.2325 24.6139 52.5419 25.4963 53.4245C26.9048 54.8331 32.6829 60.1707 34.4647 61.4181C37.5107 63.5438 43.6069 71.9999 51.6546 71.9999C56.1473 71.9957 60.483 69.73 63.7665 66.586Z" fill="url(#paint18_linear)"/><path d="M67.6355 39.3336C67.75 34.2718 71.4281 31.8576 71.4281 29.3288C71.4281 28.5821 71.042 28.039 70.4905 27.6401C71.1651 29.6088 69.5615 31.3569 67.173 34.3312C64.5852 37.5516 64.0125 42.554 65.7943 47.5564C67.576 52.5588 65.3361 59.4578 61.7131 61.6429C58.0902 63.828 53.2794 73.4297 39.5002 62.5805C39.496 62.5763 39.496 62.5763 39.4917 62.5721C38.6517 61.7914 37.8203 61.0998 36.976 60.5779C31.1555 56.9714 27.8423 53.7298 25.335 51.0059C24.8429 50.4713 23.5193 48.4134 21.9412 49.0923C22.7302 50.8786 24.8556 52.7837 25.492 53.4243C26.9004 54.833 32.6785 60.1706 34.4603 61.418C34.6937 61.5792 34.9439 61.7786 35.2112 62.0077C35.2791 62.0671 35.3512 62.1266 35.4233 62.1902C35.4403 62.2072 35.4615 62.2241 35.4785 62.2411C35.5252 62.2835 35.5676 62.3217 35.6142 62.3642C35.6227 62.3726 35.6354 62.3811 35.6439 62.3938C37.4512 64.0359 39.9414 66.7556 42.9917 68.8813C42.9917 68.8813 42.9959 68.8813 42.9959 68.8855C43.2632 69.0722 43.5347 69.2546 43.8104 69.4328C43.8147 69.4371 43.8189 69.4371 43.8232 69.4413C44.0989 69.6153 44.3747 69.785 44.6589 69.9462C44.6632 69.9462 44.6631 69.9505 44.6674 69.9505C46.7801 71.164 49.1176 71.9998 51.646 71.9998C60.958 71.9998 69.5827 62.2835 69.5827 55.1512C69.5911 48.0189 67.4997 45.3119 67.6355 39.3336Z" fill="url(#paint19_linear)"/><defs><linearGradient id="paint0_linear" x1="65.0642" y1="73.8382" x2="57.3873" y2="55.8548" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint1_linear" x1="71.5866" y1="76.6479" x2="57.6706" y2="53.1894" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint2_linear" x1="23.5636" y1="48.5439" x2="33.0508" y2="55.5289" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint3_linear" x1="20.1094" y1="30.053" x2="36.7558" y2="47.4734" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint4_linear" x1="38.0868" y1="21.833" x2="47.7473" y2="37.0119" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint5_linear" x1="28.1165" y1="24.3547" x2="41.2271" y2="42.0632" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint6_linear" x1="32.8867" y1="40.3991" x2="27.3841" y2="45.5821" gradientUnits="userSpaceOnUse"><stop stopColor="#F0C492" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint7_linear" x1="43.7062" y1="26.4916" x2="35.4263" y2="33.9655" gradientUnits="userSpaceOnUse"><stop stopColor="#F0C492" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint8_linear" x1="36.091" y1="31.8173" x2="24.7064" y2="40.139" gradientUnits="userSpaceOnUse"><stop stopColor="#F0C492" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint9_linear" x1="44.5716" y1="43.419" x2="33.1874" y2="51.7427" gradientUnits="userSpaceOnUse"><stop stopColor="#F0C492" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.5159 29.9035) scale(13.6657 13.6676)"><stop stopColor="#DEBA94" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></radialGradient><linearGradient id="paint11_linear" x1="45.2212" y1="25.0238" x2="38.1487" y2="31.5779" gradientUnits="userSpaceOnUse"><stop offset="0.3072" stopColor="#D2A374" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint12_linear" x1="39.8062" y1="28.5769" x2="30.4913" y2="36.9707" gradientUnits="userSpaceOnUse"><stop offset="0.3072" stopColor="#D2A374" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint13_linear" x1="36.6586" y1="37.6567" x2="25.1588" y2="47.3152" gradientUnits="userSpaceOnUse"><stop offset="0.3072" stopColor="#D2A374" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint14_linear" x1="24.1117" y1="44.6746" x2="37.4802" y2="55.5405" gradientUnits="userSpaceOnUse"><stop offset="0.3118" stopColor="#DEBA94" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint15_linear" x1="26.6703" y1="31.2037" x2="37.1072" y2="47.0725" gradientUnits="userSpaceOnUse"><stop offset="0.3118" stopColor="#D2A374" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint16_linear" x1="34.8441" y1="32.3371" x2="37.7765" y2="30.095" gradientUnits="userSpaceOnUse"><stop offset="0.3118" stopColor="#F0C492" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint17_linear" x1="46.9502" y1="27.0993" x2="41.5445" y2="55.9641" gradientUnits="userSpaceOnUse"><stop offset="0.3118" stopColor="#DEBA94" stopOpacity="0"/><stop offset="1" stopColor="#D2A374"/></linearGradient><linearGradient id="paint18_linear" x1="44.2494" y1="54.3063" x2="36.0838" y2="68.5654" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient><linearGradient id="paint19_linear" x1="70.6811" y1="86.7385" x2="36.5232" y2="18.7768" gradientUnits="userSpaceOnUse"><stop offset="0.00132565" stopColor="#D2A374"/><stop offset="1" stopColor="#DEBA94"/></linearGradient></defs></svg>

const menu = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none"><path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="navy"/></svg>


export const Sqdot = () =>{
    return (
        <div className='border-2 inline-block border-orange-400 bg-transparent h-[0.7em] w-[0.7em]' onClick={(e)=>e.preventDefault()}></div>
    )
}
{/* <div id='lower-main' className="flex mt-2">
                <div id='svg-container' className="py-2 pr-3 -mt-2">            
                   
           
                  
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