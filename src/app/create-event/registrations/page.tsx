import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import events from '@/app/data/events'


const page = () => {
  return (
    <div className='flex bg-white flex-col lg:flex-row'>
      <Sidebar/>
      <div className='w-full p-5 lg:p-10'>
          <div>
            <h1 className='text-2xl font-extrabold text-center mb-6 lg:mb-0'>Your All Registered Events</h1>
            <div className='lg:p-10 grid grid-cols-1 gap-4'>
                {
                  events.map(event=>(
                    <div className='bg-slate-100 rounded-xl p-4 w-full flex items-center justify-between'>
                      
                      <div className='md:w-12 md:h-12 w-10 h-10  overflow-hidden'>
                          <img className=' rounded-full object-cover w-full h-full' src={event.img} alt="" />
                      </div>
                      <div>
                          <h2 className='text-sm lg:text-xl'>{event.name}</h2>
                          <h2 className='text-sm lg:text-xl text-gray-500'>12/02/2012</h2>
                        </div>
                      <div>
                        <button className='bg-red-600 text-white px-4 py-2 rounded-xl text-sm lg:text-xl'>Cancel Event</button>
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