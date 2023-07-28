'use client'
import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const page = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>{
    setShowModal(!showModal)
  }

  return (
    <div className='bg-white flex flex-col lg:flex-row'>
      <div className='lg:w-[15%] w-full px-2 '>
      <Sidebar/>
      </div>
      <div className='w-full mt-3 lg:mt-0'>
       <div className='w-full md:py-3 h-10 lg:h-16 border-b border-[gainsboro] flex  justify-between border-t py-1'>
       <div>
          <h1 className=' text-xl lg:text-2xl font-bold md:pl-3 pl-1'>Listings</h1>
        </div>

        <div className='flex md:gap-2 gap-1 pr-2 md:pr-3'>
          <button className='md:px-4 px-2 py-2 bg-green-500 text-white rounded-full text-sm font-medium tracking-wider' onClick={toggleModal}>Create Listings</button>
          <Link href="http://localhost:3000/create-event/manage-listings/all-listings" className='md:px-4 px-2 py-2 site_bg_color text-white rounded-full text-sm font-medium tracking-wider'>Show All Listings</Link>
        </div>
       </div>
{/* Modal */}
  {
    showModal ? <div >
    {/* <div className='absolute  bg-transparent flex justify-center w-full items-center z-5 p-4'> */}
    <div className='bg-transparent flex justify-center w-full items-center z-5 p-4'>
    <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-10 rounded-3xl shadow-2xl border lg:w-[50vw] w-full'>
          <div className='w-full'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Create Listings Modal</h2>
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

  <div className='flex justify-center items-center h-[100vh]'>
      <p className='text-slate-600 text-sm px-3'>Nothing There for Now But You Can Create And Manage Your Listings...!</p>
  </div>
  </div>
    </div>
  )
}

export default page