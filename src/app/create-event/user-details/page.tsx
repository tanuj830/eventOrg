'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState } from 'react'

const page = () => {
  
  const [userRegistered, setUserRegistered] = useState(false)

  const updateDetails = (e) =>{

    e.preventDefault();

    // Update details here and change state
    setUserRegistered(!userRegistered)
  }
 
  const editDetails = (e) =>{

    e.preventDefault();

    // Update details here and change state
    setUserRegistered(!userRegistered)
  }

  return (
    <div className='flex bg-white flex-col lg:flex-row'>
      <Sidebar/>
      <div className='w-full'>
          <div className='flex justify-center items-center w-full'>
              <div className='w-full p-10 lg:p-20'>
               <form action="">
               <div className='w-full flex flex-col pb-10'>
                <label >Name</label>
                {
                  !userRegistered ? 
                  <input type="text" placeholder="Enter Your Name" className='border-b border-[gainsboro] outline-none w-full px-6 py-3 ' /> :
                  <h2 className='text-xl font-medium'>John Doe</h2>
                }
                </div>
                <div className='w-full flex flex-col pb-10'>
                <label >Email</label>
                {
                  !userRegistered ? 
                  <input type="text" placeholder="Enter Your E-mail ID" className='border-b border-[gainsboro] outline-none w-full px-6 py-3 ' /> :
                  <h2 className='text-xl font-medium'>JohnDoe@gmail.com</h2>
                }
                </div>
                <div className='w-full flex flex-col pb-10'>
                <label >Phone Number</label>
                {
                  !userRegistered ? 
                  <input type="text" placeholder="Enter Your Phone Number" className='border-b border-[gainsboro] outline-none w-full px-6 py-3 ' /> :
                  <h2 className='text-xl font-medium'>John Doe</h2>
                }
                </div>
                {
                  !userRegistered ? <button className='site_bg_color px-8 py-3 rounded-full text-white' onClick={updateDetails}>Update Details</button> : <button onClick={editDetails} className='site_bg_color px-8 py-3 rounded-full text-white'>Edit Details</button>
                }
               </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default page