'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'
export default function Contact() {
    const [dropState, setDropState] = useState(false)
    return (
        <div className='bg-skillGradient2 relative -z-[0] sm:z-0 snap-y w-screen  overflow-x-hidden '>
            <div id="hero" className="mt-3 sm:mt-0 gap-1 justify-start h-fit items-center max-w-[83rem] mx-auto px-2 sm:px-5 md:px-10 pb-12 sm:py-9 sm:flex-row flex-col flex" >


                    <div className=" gap-1 min-w-[60%] section top-[2.21rem] opacity-0 animate-land_anime1 pb-2 justify-center snap-start sm:pb-20 px-3 h-[80vh] sm:h-fit md:px-5 flex flex-col ">

                    <h1 className=" px-10 py-5 font-bold text-center sm:text-start w-full font-Manrope text-[2.35rem] lg:text-5xl text-violet-800 leading-[1.1]" >Contact<span className="text-orange-400">.</span></h1>
                        <form className='font-Inter' action="">
                            <div className='px-3 py-1 h-9 border mb-7 rounded-md text-sm border-gray-400'>
                                <label htmlFor="" className='text-gray-400 text-sm' >Name:</label>
                                <input type="text" className='ml-4 bg-transparent outline-none h-4/5 w-5/6' />
                                <p className="error"></p>
                            </div>
                            <div className='py-1 px-3 h-9 border mb-7 rounded-md text-sm border-gray-400'>
                                <label htmlFor="" className='text-gray-400 text-sm box-border' >Email:</label>
                                <input type="text" className='ml-4 bg-transparent outline-none h-4/5 w-5/6' />
                                <p className="error"></p>
                            </div>
                            <div className='p-3  border mb-7 rounded-md border-gray-400 text-sm flex items-start gap-3'>
                                <label htmlFor="message" className='text-gray-400 text-sm'>Message:</label>
                                <textarea name="message" id="" className="bg-transparent h-4/5 w-5/6 outline-none" rows={5}></textarea>
                                <p className="error"></p>
                            </div>
                            <button type="submit" className='py-1 ml-2 px-5 rounded bg-orange-400 font-semibold text-violet-800'>Send</button>
                        </form>
                    </div>
                
                
                
            </div>
        </div>
    );
}



const menu = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none"><path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="navy"/></svg>
