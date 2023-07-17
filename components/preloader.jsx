'use client'
import { useEffect, useState } from 'react'
import preload from './preload';


const Preloader = ({data})=>{
    const [render, setRender]= useState(preload);
    useEffect(()=>{
    const prloaderTimeout = setTimeout(() => {
      setRender(data);
    },200);
    return () => {
      clearTimeout(prloaderTimeout);
    };
  },[]) 
    return(
        <div className="preloader h-full">
            {render}
        </div>
    )
}

export default Preloader