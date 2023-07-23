import React from 'react'

const Hero = () => {
  return (
<div className=' h-[90vh] md:px-24  lg:px-40 lg:mt-10 xl:p-30 sm:px-10 text-white bg-[url(https://cdn.thecodehelp.in/m64udmyhucj2zb42uvyf_06640ff501.svg)] bg-no-repeat bg-left-bottom   '>
<div className='flex items-center justify-start '>
<div className=' mt-20 md:mt-30 lg:mt-0 px-5'>
    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e0b16.appspot.com/o/ticket.gif?alt=media&token=ea2cf2f6-8ac7-4c36-a7c8-40446c2c6422" className='xl:w-36 md:w-24 w-20 rounded-full transition-all shadow-2xl shadow-gray-800' alt="" />

    <h1 className='xl:text-[100px] md:mt-10 lg:mt-0 lg:text-[80px] text-[40px] font-bold '>Collegify.</h1>
    <p className='hidden lg:inline-block text-base mt-10 xl:mt-10 '>Welcome to Book College Events, your one-stop-shop for <br /> affordable and accessible event organizing and booking. Say <br /> goodbye to traditional difficulties and hello to seamless payment <br /> gateways and magnificent event management.
</p>
    <p className='inline-block lg:hidden text-base mt-10 xl:mt-10 font-medium'>Welcome to Book College Events, your one-stop-shop for affordable and accessible event organizing and booking. Say  goodbye to traditional difficulties and hello to seamless payment  gateways and magnificent event management.

</p>
<div className='mt-8 md:mt-10 flex justify-start items-center text-black gap-1 md:gap-4'>
    <input type="text" placeholder='name@email.com' className='px-2 md:px-5 py-2 bg-[#0079d534] text-black rounded-xl outline-none border border-[gainsboro]' />
    <button className=' shadow-2xl border border-[gainsboro]   text-white px-2 md:px-4 py-2 rounded-xl'>SignUp</button>
</div>
    </div>
</div>
</div>
  )
}

export default Hero