'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'
export default function Contact() {
    const [dropState, setDropState] = useState(false)
    return (
        <div>
            <header  className=" h-14 w-screen lg:h-[14vh] z-[1] bg-white ">     
                    <div className='max-w-[83rem] h-full mx-auto flex items-center justify-between px-3 sm:px-6 md:px-10 py-4 bg-white relative'>
                        <figure className='rounded-full mx-4 bg-slate-600 h-9 w-9 border-2 flex items-center justify-center'> 
                        
                        </figure>
                        <nav className=''>
                        <div onClick={()=>setDropState(!dropState)} className='inline-block sm:hidden border-none mr-2 relative -top-1 py-1 px-3 '>
                            <button className='scale-105'>{menu}</button>
                            <ul className={!dropState? "flex-col justify-center flex gap-4 items-center font-semibold text-[#7a7a7a] font-Inter p-2 w-28 h-fit text-sm top-[100%] border border-[#b1b1b1] pointer-events-none opacity-0 bg-white absolute right-0 rounded-lg":"flex-col justify-center flex gap-4 items-center font-semibold text-[#7a7a7a] font-Inter p-2 w-28 text-sm h-fit top-14 border border-[#ff9463] bg-white absolute right-0 rounded-lg"}>   
                                    <Link href={"/"}><li className='hover:text-black py-1 border-b border-slate-400 px-1'>Home</li></Link>
                                    <Link href={"/about"}><li className='hover:text-black py-1 border-b border-slate-400 px-1'>About</li></Link>
                                    <Link href={"#"}><li className='hover:text-black py-1 border-b border-slate-400 px-1'>My Substack</li></Link>
                            </ul>
                        </div>
                        
                        <ul className='hidden mr-5 sm:flex gap-10 font-light text-sm text-[#8a8a8a] font-Inter'>
                            <Link href={"/"}><li className='hover:text-black'>Home</li></Link>
                            <Link href={"/about"}><li className='hover:text-black'>About</li></Link>
                            <Link href={"#"}><li className='hover:text-black'>My Substack</li></Link>
                        </ul>
                        </nav>
                    </div>
                </header>
            <form action="">
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                    <p className="error"></p>
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" />
                    <p className="error"></p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id=""></textarea>
                    <p className="error"></p>
                </div>
            </form>
        </div>
    );
}



const menu = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none"><path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="navy"/></svg>
