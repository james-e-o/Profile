'use client'

import './globals.css'
import Preloader from '@components/preloader'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'My profile',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [render, setRender]= useState(Preloader);
  useEffect(()=>{
    const prloaderTimeout = setTimeout(() => {
      setRender(children);
    }, 2000);
    return () => {
      clearTimeout(prloaderTimeout);
    };
  },[]) 
  return (
    <html lang="en" className="m-0 p-0">
      <body className="bg-darkNavy m-0 text-white font-sans" >
            {render}
      </body>
    </html>
  )
}
