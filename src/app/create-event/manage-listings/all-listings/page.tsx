import React from 'react'
import events from '@/app/data/events'
import Link from 'next/link'
import {BiArrowBack} from "react-icons/bi"


const page = () => {
  return (
    <div className='bg-white'>
         <div className='w-full p-5 lg:p-10'>
          {/* <div className={`z-0 ${showModal ? 'bg-slate-300': 'bg-transparent'}`}> */}
          <div className='z-0'>
          <div className='flex justify-between items-center'>
            <Link href="/create-event/manage-listings" className='font-bold text-2xl'><BiArrowBack/></Link>
            <h1 className='text-2xl font-extrabold text-center mb-6 lg:mb-0'>Your All Listings</h1>
            </div>
            <div className='lg:p-10 grid lg:grid-cols-4 grid-cols-2 gap-4'>
                {
                  events.map(event=>(
                    <div className='bg-slate-100 rounded-xl  w-full '>
                      
                          <img className=' w-full h-36 rounded-t-2xl' src={event.img} alt="" />
                      <div className='md:w-12 md:h-12 w-10 h-10  overflow-hidden'>
                      </div>
                      <div>
                          <h2 className='text-sm lg:text-xl'>{event.name}</h2>
                          <h2 className='text-sm lg:text-xl text-gray-500'>12/02/2012</h2>
                        </div>
                      <div>
                        <button className='bg-red-600 text-white px-4 py-2 rounded-xl text-sm lg:text-xl' >Action</button>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
      </div>
    </div>
  )
}

export default page