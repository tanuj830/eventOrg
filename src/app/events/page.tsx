'use client'
import React, { useState } from 'react'
import events from '../data/events'
import Link from 'next/link'
import {BiSortUp} from 'react-icons/bi'
import {LiaFilterSolid} from 'react-icons/lia'
import { AiOutlineClose } from 'react-icons/ai'
const page = () => {
  
  const [showFilterModel, setShowFilterModel] = useState(false)
  const [showSortModel, setShowSortModel] = useState(false)
  const [outsideModelClicked, setOutsideModelClicked] = useState(false)
  
  const toggleModalFilter = () =>{
    setShowFilterModel(!showFilterModel)
  }
  const toggleModalSort = () =>{
    setShowSortModel(!showSortModel)
  }
  const handleOutsideModel = () =>{
    setOutsideModelClicked(!outsideModelClicked)
  }
  
    // if(showFilterModel && outsideModelClicked)
    // setShowFilterModel(false)
    
    // else if(showSortModel && outsideModelClicked)
    //  setShowSortModel(false) 
      


return (
  <div className='relative ' onClick={handleOutsideModel} >
       {/*Sort  Modal */}
 {
   showSortModel ? <div className={`top-[30%] md:top-[40%] lg:right-[40%] md:right-[30%] sm:right-[18%] right-[5%] z-10 ${showSortModel ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  '>
  <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-96 w-64'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-bold'>Event Sorting</h2>
            <button className='font-bold text-2xl' onClick={toggleModalSort}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Recent Events</Link>
            </div >
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Sort by Date</Link>
            </div >
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Sort by Time</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}
       {/* filter Modal */}
 {
  showFilterModel ? <div className={`top-[30%] md:top-[40%] lg:right-[40%] md:right-[30%] sm:right-[18%] right-[5%] z-10 ${showFilterModel ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  '>
  <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-96 w-64'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-bold'>Filters</h2>
            <button className='font-bold text-2xl' onClick={toggleModalFilter}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Filter 1</Link>
            </div >
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Filter 2</Link>
            </div >
            <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
              <Link href="#">Filter 3</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}

        <section className ={`text-gray-600 body-font bg-white pb-20 transition-all duration-500 ${showSortModel || showFilterModel ? "blur-sm brightness-90": "blur-0"}`}>
  <div className="container px-5  mx-auto">
    <h1 className='text-2xl lg:text-5xl font-extrabold text-center py-7 lg:py-14'>Explore Ongoing Events</h1>
    <div className='flex justify-between items-center pb-4'>
        <button className='text-[20px]  flex gap-1 items-center text-white font-semibold rounded-full px-3 py-1 md:py-2 md:px-5 shadow-lg  site_bg_color' onClick={toggleModalFilter}>
          <LiaFilterSolid/>
          <span className='text-[16px]'>Filters</span>
        </button>
        <button className='text-[20px]  flex gap-1 items-center text-white font-semibold rounded-full px-3 py-1 md:py-2 md:px-5 shadow-lg  site_bg_color' onClick={toggleModalSort}>
          <BiSortUp/>
          <span className='text-[16px]'>Sort</span>
        </button>
    </div>

    <div className={`grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 -m-4  ${showSortModel ? "blur-lg": "blur-0"}`}>
      
     {
       events.map(event=>(
         <div className="p-4 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl bg-slate-50 overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={event.img}/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{event.category}</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">KING Concert LIVE</h1>
                <p className="leading-relaxed mb-3">{event.description}.</p>
                <div className="flex items-center flex-wrap ">
                  <Link href={"/events/ "+ event._id} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Explore Event
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
     }
    
    </div>
  </div>
</section>
    </div>
  )
}

export default page