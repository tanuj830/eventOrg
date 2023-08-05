'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import events from '@/app/data/events'
const page = () => {
const [count, setCount] = useState(1)
const [grandTotal, setGrandTotal] = useState(0)
    const path = usePathname()
// console.log(path.slice(24))
const calculate = (price:any)=>{
    setGrandTotal(price*count)
}
const incCount = ()=>{
    setCount(count+1)
}
const decCount = ()=>{
    setCount(count-1)

}
    return (
    <div className='bg-white px-3 lg:px-0 h-screen'>
        <div>
            <h2 className='text-xl lg:text-4xl font-extrabold text-center p-3'>Checkout & make it yours</h2>
        </div>
        <div className='lg:p-10 md:p-5 '>
        {/* <div className=' w-full lg:w-[50%]'> */}
            {/* <h1 className='text-2xl font-bold'>Billing Details</h1> */}
            {/* <form action="" >
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Name *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Street Address *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Town / City *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>State *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Zip Code *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Phone *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'>
                    <label htmlFor="" className='font-bold'>Email address *</label>
                    <input type="text" className='border-b border-gray-500 outline-none  px-6 py-2'/>
                </div>
                <div className='flex flex-col mt-4 text-gray-600'> 
                    <label htmlFor="" className='font-bold'>Total Persons *</label>
                    <input type="number" className='border-b  border-gray-500 outline-none  px-6 py-2 w-36'/>
                </div>
            </form> */}

            {/* order details */}
            <h1 className='text-2xl font-bold'>Order Details</h1>
            {
                events.map(e=>(
                    e._id == path.slice(24) ?<div className='justify-between flex flex-col md:flex-row gap-10 lg:gap-0'>
                    <section className='mt-10  w-full lg:w-[50%]'>
                    <div >
            <section className="text-gray-600 body-font border rounded-t-xl overflow-hidden mt-3">
                    <div className=' text-white justify-around font-bold p-3  flex site_bg_color'>
                        <div className=''>
                            Event Name
                        </div>
                        <div className=''>
                            Price
                        </div>
                        <div className=''>
                            Add People
                        </div>
                    </div>
                    <div className='  justify-around font-bold p-3  rounded-xl flex '>
                        <div className=''>
                            Event name shown here
                        </div>
                        <div className=''>
                            {
                                e.event_fees
                            }
                        </div>
                        <div className='flex items-center gap-4 text-gray-600'> 
                             <button onClick={decCount} className='border px-2  bg-slate-50'>-</button>{count}
                            <button onClick={incCount} className='border px-2  bg-slate-50'>+</button>
                </div>
                    </div>
            </section>
          </div>
          
          </section>
          <div className=' border rounded-2xl shadow-lg lg:p-10 p-5 w-full lg:w-[30%]'>
          <div>
              <h2 className='text-2xl font-bold'>Stripe Payment Integration</h2>
          </div>
          <p className='pt-4'>Here we will add the stripe integration in order to accept the transactions.</p>
          <div className='flex flex-col'>
            <button className='mt-3 px-5 py-2 border rounded-full border-[gainsboro]' onClick={()=>calculate(e.event_fees)}>Calculate Price</button>
          {grandTotal > 0 ? <>
          <button className='mt-3 text-white px-5 py-2 site_bg_color rounded-full shadow-xl'><span>₹{grandTotal}</span> Make Payment</button>
          </>:null}
            </div>
      </div>
      </div>:null
          ))}
               









    
        </div>
    </div>
  )
}

export default page