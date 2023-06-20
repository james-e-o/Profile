import React from 'react'

const preload = () => {
  return (
    <div id='preload' className="h-full flex justify-center gap-1 items-center">
        <div id="container" className="gap-1 ">
            <div id="blocks" className="h-6 w-2 bg-gray-500 inline-block m-1 animate-bounce"></div>
            <div id="blocks" className="h-6 w-2 bg-blue-400 inline-block m-1 animate-bounce-slow2"></div>
            <div id="blocks" className="h-6 w-2 bg-yellow-300 inline-block m-1 animate-bounce-slow3"></div>
            <div id="blocks" className="h-6 w-2 bg-white inline-block m-1 animate-bounce-slow4"></div>
        </div>
    </div>
  )
}

export default preload