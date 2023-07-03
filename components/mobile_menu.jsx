
import React from 'react'
import Link from 'next/link'

const Mobile_menu = () => {
//   useEffect(()=>{
//     document.onclick=(e)=>{
//         const popdiv = document.querySelector('#mobile-menu')
//         const popbox = document.querySelector('#link-container')
//         const inner_div = document.querySelector('#inner-link-container')
//         if (popdiv.classList.contains('popdiv')){
//             if(e.target == popdiv && e.target != popbox){
//                 inner_div.classList.remove("inner_div")
//                 popbox.classList.remove("popbox")
//                 popdiv.classList.remove('popdiv')
//             }
//         }
//     }
// },[])

// const [opaqe, setOpaque]=useState(0)
// function Pop (e){
//     const popdiv = document.querySelector('#mobile-menu')
//     const popbox = document.querySelector('#link-container')
//     const inner_div = document.querySelector('#inner-link-container')
//     const links = document.querySelectorAll('#inner-link-container div')
    
//     popdiv.classList.add("popdiv")
//     popbox.classList.add("popbox")
//     inner_div.classList.add("inner_div")
//     links.forEach(link=>{link.classList.add('links')})
    
//     // popbox.classList.toggle('mm_transition')
// }   
  return (
    <div id="mobile-menu" className="mobile_menu">
            <div id="link-container" className="relative before:content-[''] before:absolute before:h-[1px] before:top-[-1px] before:bg-white before:left-[-1px] after:content-[''] after:absolute after:top-[-1px] after:w-[1px] after:bg-white after:right-[-1px] ">
                <div id="inner-link-container" className="translate-y-5 w-full h-full relative flex flex-col items-center justify-center before:content-[''] before:absolute before:h-[1px]   before:bottom-[-1px]  before:bg-white before:right-[-1px] after:content-[''] after:absolute after:bottom-[-1px] after:w-[1px]  after:bg-white after:left-[-1px]">
                    <div className=" mx-20"><Link href="/" className="text-yellow-300 font-semibold text-xl no-underline">Home</Link></div>
                    <div className=" mx-20 mt-5"><Link href="/About" className="font-semibold text-white text-xl no-underline">About</Link></div>
                    <div className=" mx-20 mt-5"><Link href="/Projects" className="font-semibold text-white text-xl no-underline">Projects</Link></div>
                    <div className=" mx-20 mt-5 mb-5"><Link href="/Blogs" className="font-semibold text-white text-xl no-underline">Blog</Link></div>
                </div>
            </div> 
            <div className=" mx-2 mt-14 flex flex-col items-center"><Link href="#" className="text-white no-underline">
                 <span className="text-xs font-thin"><span className="text-sm m-0 p-0 border-spacing-0 border-0 text-gray-400"> →</span>onwuasoanyajames@gmail.com</span>
                </Link>
                <span className="text-gray-400 text-xs italic font-thin">All rights reserved &#169;2023 by james onwuasoanya</span>
            </div>           
        </div>
  )
}

export default Mobile_menu