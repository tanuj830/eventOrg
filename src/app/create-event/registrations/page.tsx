'use client'

import Sidebar from '@/app/components/Sidebar'
import React, { useState } from 'react'
import events from '@/app/data/events'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import event from '@/app/events/[slug]/page'

const page = () => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>{
    setShowModal(!showModal)
  }

  return (<>
 
    <div className='relative  bg-white '>
    {
   showModal ? <div className={`top-[30%] md:top-[40%] lg:right-[40%] md:right-[30%] sm:right-[18%] right-[5%]  z-10 ${showModal ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  '>
  <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-96 w-64'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-bold'>Event Sorting</h2>
            <button className='font-bold text-2xl ' onClick={toggleModal}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-2 w-full text-gray-700 text-sm'>
            <div className='flex flex-col  py-2 px-4  w-full'>
              <Link href="#">Recent Events</Link>
            </div >
            <div className='flex flex-col  py-2 px-4  w-full'>
              <Link href="#">Sort by Date</Link>
            </div >
            <div className='flex flex-col  py-2 px-4  w-full'>
              <Link href="#">Sort by Time</Link>
            </div >
            <div className='flex flex-col text-red-600 py-2 px-4  w-full'>
              <Link href={"/cancel-event"}>Cancel Event</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}
      
      <div className={`flex  flex-col lg:flex-row text-gray-600 body-font bg-white pb-20 transition-all duration-500 ${showModal ? "blur-md brightness-90": "blur-0"}`}>
        <div className='lg:w-[15%] w-full px-2 shadow-lg'>
      <Sidebar/>
      </div>
      <div className='w-full p-5 lg:p-10'>
          {/* <div className={`z-0 ${showModal ? 'bg-slate-300': 'bg-transparent'}`}> */}
          <div className='z-0'>
            <h1 className='text-2xl font-extrabold text-center mb-6 lg:mb-0'>Your All Registered Events</h1>
            <div className='lg:p-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                  events.map(event=>(
                    <div className='border  rounded-xl text-black  w-full '>
                      
                          <img className=' w-full h-36 rounded-t-2xl' src={event.img} alt="" />
                      <div className='p-4 flex flex-col justify-around'>
                      <div className='py-3 px-1'>
                          <h2 className='text-sm font-semibold lg:text-xl '>{event.event_name}</h2>
                          <h2 className='text-lg text-justify'>{event.description}</h2>
                          <div className='flex items-center justify-between mt-3'>
                          <h2 className='text-lg '>12/02/2012</h2>
                          <h2 className='text-lg '>12 Seats</h2>
                          </div>
                        </div>
                        <button className=' border border-[gainsboro] px-4 py-2  rounded-full text-md' onClick={toggleModal}>Action</button>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
      </div>
                    </div>
    </div>
    </>
  )
}

export default page