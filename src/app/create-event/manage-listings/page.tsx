import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white flex flex-col lg:flex-row'>
      <Sidebar/>
      <div className='w-full md:py-3 h-10 lg:h-16 border-b border-[gainsboro] flex  justify-between border-t py-1'>
        <div>
          <h1 className=' text-xl lg:text-2xl font-bold md:pl-3 pl-1'>Listings</h1>
        </div>

        <div className='flex md:gap-2 gap-1 pr-2 md:pr-3'>
          <button className='md:px-4 px-2 py-2 bg-green-500 text-white'>Create Listings</button>
          <button className='md:px-4 px-2 py-2 site_bg_color text-white'>Show All Listings</button>
        </div>
      </div>
    </div>
  )
}

export default page