'use client'
import React, { useState } from 'react'
import events from '@/app/data/events'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { RWebShare } from "react-web-share";
import {FiShare2 } from 'react-icons/fi'

const event = () => {

  const path = usePathname()

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>{
    setShowModal(!showModal)
  }


  return (
    <div className='relative py-10 lg:px-40  bg-white sm:px-10 md:px-24'>
      {
        events.map(e=>(
          e._id == path.slice(11) ? <>
          <div>
           {
   showModal ? <div className={`w-full top-[15%] sm:top-[25%] md:top-[30%] lg:-right-[60%]  px-6   z-10 ${showModal ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  w-full'>
  <div className='flex items-center justify-center bg-slate-50 p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-full w-full'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-md font-bold'>Register for {e.event_name}</h2>
            <button className='font-bold text-xl ' onClick={toggleModal}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-2 w-full text-gray-700 text-sm'>
            <div className='flex items-center  gap-4 py-2 px-4  w-full'>
              <span className='w-full text-[13px]'>Total People</span>
              <input type="number" className='border px-2 w-20 py-1' defaultValue={1} />
            </div >
            <div className=' py-2 px-4  w-full'>
              <div className='flex items-center  gap-4'>
                <span className='w-full text-[13px]'>Contact Number</span>
                <input type="text" className='border px-2 w-full py-1 text-[10px]' placeholder="+91- XXX-XXX-XXXX" />
              </div>
              <span className='text-[8px] text-slate-600 '>Contact number is for contacting you if necessary regarding your registration </span>
            </div >
            <div className=' py-2 px-4  w-full'>
              <div className='flex items-center  gap-4'>
                <span className='w-full text-[13px]'>E-mail ID</span>
                <input type="email" className='border px-2 w-full py-1 text-[10px]' placeholder="abc@xyz.com" />
              </div>
              <span className='text-[8px] text-slate-600 '>E-mail ID is for contacting you and update users regarding new events </span>
            </div >
            <div className='flex flex-col text-white py-2 px-4  w-full'>
              <Link href={"/events/payment-gateway/" + path.slice(11)} className='text-center py-2 site_bg_color rounded-full '>Checkout</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}
</div>


          <div className={`transition-all duration-500 ${showModal ? "blur-md brightness-90": "blur-0"}`}>
              <section className="text-gray-600 body-font">
      <div className='flex justify-around items-center'>
        <h1 className='font-extrabold text-center text-2xl lg:text-5xl'>{e.event_name}</h1>
        <div>
      <RWebShare
        data={{
          text: "Collegify: best for organizing & managing events.",
          url: `https://collegify.vercel.app/events/%${path.slice(11)}`,
          title: "Collegify",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className='text-lg lg:text-2xl hover:scale-110 border site_bg_color text-white shadow-xl p-2 rounded-full transition-all duration-300'><FiShare2/></button>
      </RWebShare>
    </div>
      </div>
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={e.img}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{e.organiser}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Date of Event {e.date}</p>
            <button className='site_bg_color mt-4  text-white rounded-full py-3 px-8 font-medium tracking-wider' onClick={toggleModal}>Register</button>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">{e.description}{e.description}{e.description}.</p>
        </div>
      </div>
    {/* <a href={e.map_link}>Find location on map</a> */}
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"  />
    </div>
  </div>
</section>
          </div>
          </>
          :null
        ))
      }
    </div>
  )
}

export default event