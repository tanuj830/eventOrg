import React from 'react'

const Hero = () => {
  return (
<div className='h-[90vh] md:p-24 lg:p-40 sm:p-10 text-white'>
<div className='flex items-center justify-start'>
<div className=' mt-20 md:mt-8 lg:mt-0 px-5'>

    <h1 className='lg:text-[100px] md:text-[80px] text-[40px] font-bold '>Collegify.</h1>
    <p className='text-base mt-5 md:mt-10 '>Welcome to Book College Events, your one-stop-shop for <br /> affordable and accessible event organizing and booking. Say <br /> goodbye to traditional difficulties and hello to seamless payment <br /> gateways and magnificent event management.

</p>
<div className='mt-8 md:mt-10 flex justify-start items-center text-black gap-2 md:gap-4'>
    <input type="text" placeholder='name@email.com' className='px-2 md:px-5 py-2 bg-[#0079d534] text-black rounded-xl outline-none border border-[gainsboro]' />
    <button className='bg-black text-white px-2 md:px-4 py-2 rounded-xl'>Sign Up</button>
</div>
        {/* <div className=''>
            <h2 className='text-[100px] font-bold'>BOOK</h2>
        </div>
        <div>
            <p className='text-slate-600'>Welcome to the world of unparalled event <br/> booking experiences!  we make event organization and booking <br/> feel like sipping fine wine on a saturday evening.</p>
        </div> */}
    </div>
    {/* <div className='grid grid-cols-3 gap-2 mt-20'>
        <img className='rounded-l-3xl' src="https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="https://images.pexels.com/photos/2306278/pexels-photo-2306278.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img className='rounded-r-3xl' src="https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div> */}
</div>
</div>
  )
}

export default Hero