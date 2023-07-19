'use client'
import Nav from '@components/header'
import Mobile_menu from '@components/mobile_menu'
import ret from '@components/function'
import Preloader from '@components/preloader'

const Blog = () => {
  const logo = "Posts"
    const reactions ={
      views: 60,
      comments: 70,
      likes: 40
    }
    const className = "text-white font-sans text-3xl m-0 pl-4"
    const data =  <div id="blog-main" className="relative flex flex-col justify-between lg:h-screen bg-gradient-to-b from-slate-600 to- bg-deepSlate">
        <Nav logo={logo} color={className} prop={ret}/>
        <Mobile_menu /> 
        <div className="mx-4 mt-6 grid grid-cols-2">
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">vs:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">vs:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">vs:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">vs:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">vs:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    
          <div className="p-3 bg-slate-500 rounded-lg mx-1 mb-1">
            <h3 className="px-2">Basics of React Router Dom 6 </h3>
            <div className="px-2">
              <p className="text-sm">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</p>
              <p id='reactions' className="flex font-thin text-xs p-2">
                <span className="p-1">s:{reactions.views}</span>
                <span className="p-1">cs:{reactions.comments}</span>
                <span className="p-1">ls:{reactions.likes}</span>
              </p>
            </div>
          </div>    

          
        </div>        
  </div>
  return (
    <Preloader data={data} />
  )
}

export default Blog