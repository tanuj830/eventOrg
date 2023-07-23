'use client'

import Sidebar from '@/app/components/Sidebar'
import React, { useState } from 'react'
import events from '@/app/data/events'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'

const page = () => {

  const [showModal, setShowModal] = useState(true)

  const toggleModal = () =>{
    setShowModal(!showModal)
  }

  return (<>
 
    <div className='flex bg-white flex-col lg:flex-row'>
      <Sidebar/>
         {/* Modal */}
  {
    showModal ? <div >
    <div className='absolute  bg-transparent flex justify-center w-full items-center z-5 p-4'>
    <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-10 rounded-3xl shadow-2xl border lg:w-[50vw] w-full'>
          <div className='w-full'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Event Modal</h2>
              <button className='font-bold text-2xl' onClick={toggleModal}><AiOutlineClose/></button>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
                <Link href="#">Concert Event</Link>
              </div >
              <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
                <Link href="#">Concert Event</Link>
              </div >
              <div className='flex flex-col bg-white py-2 px-4 shadow-sm w-full'>
                <Link href="#">Concert Event</Link>
              </div >
            </div>
          </div>
    </div>
</div>
</div>: null
  }
      <div className='w-full p-5 lg:p-10'>
          {/* <div className={`z-0 ${showModal ? 'bg-slate-300': 'bg-transparent'}`}> */}
          <div className='z-0'>
            <h1 className='text-2xl font-extrabold text-center mb-6 lg:mb-0'>Your All Registered Events</h1>
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
                        <button className='bg-red-600 text-white px-4 py-2 rounded-xl text-sm lg:text-xl' onClick={toggleModal}>Action</button>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default page