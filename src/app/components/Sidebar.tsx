import React from 'react'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {RiListOrdered, RiProductHuntLine} from 'react-icons/ri'
import {FcSalesPerformance} from 'react-icons/fc'
import {SiFuturelearn} from 'react-icons/si'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <>
        <div className='hidden md:inline shadow-xl  px-5'>
        <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-4xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>PROFILE</h2>
                </div>
                <div className='flex flex-col'>
                    <Link className='' href="/create-event/user-details">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><RiListOrdered/></i>
                        User Details
                    </div>
                    </Link>
                    <Link className='' href="/create-event/registrations">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><FcSalesPerformance/></i>
                        Registrations
                    </div>
                    </Link>
                    <Link className='' href="/create-event/manage-listings">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><RiProductHuntLine/></i>
                        Manage Listings
                    </div>
                    </Link>
                </div>
        </div>

        {/* for mobile */}
        <div className='inline md:hidden'>
        {/* <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>ADMIN DASHBOARD</h2>
                </div> */}
                <div className='flex justify-around'>
                    <Link className='' href="/create-event/user-details">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><MdOutlineAdminPanelSettings/></i> */}
                         User Details
                    </div>
                    </Link>
                    <Link className='' href="/create-event/registrations">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><RiListOrdered/></i> */}
                        Registrations
                    </div>
                    </Link>
                    <Link className='' href="/create-event/manage-listings">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><FcSalesPerformance/></i> */}
                        Manage Listings
                    </div>
                    </Link>
                    <Link className='' href="/products">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><RiProductHuntLine/></i> */}
                       
                    </div>
                    </Link>
                 
                </div>
        </div>
    </>
  )
}

export default Sidebar