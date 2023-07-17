import React from 'react'

const Hero = () => {
  return (
    // <div className=' bg-[url(https://fpdl.in/uploads/20230716144323_[fpdl.in]_psychedelic-paper-shapes-with-copy-space_23-2149378246_large.jpg)] w-[100%] bg-cover bg-no-repeat'>

<div className='h-[90vh] md:px-24 py-10 lg:px-40 sm:px-10 text-white '>
<div className='flex items-center justify-start'>
<div className=' mt-20  lg:mt-0 px-5'>
    <img src="https://fpdl.in/uploads/20230716152140_[fpdl.in]_3d-rendering-hotel-travel-icon_23-2149389111_normal.jpg" className='w-36 rounded-full transition-all shadow-2xl shadow-gray-800' alt="" />

    <h1 className='lg:text-[100px] md:text-[80px] text-[40px] font-bold '>Collegify.</h1>
    <p className='hidden lg:inline-block text-base mt-5 md:mt-10 '>Welcome to Book College Events, your one-stop-shop for <br /> affordable and accessible event organizing and booking. Say <br /> goodbye to traditional difficulties and hello to seamless payment <br /> gateways and magnificent event management.
</p>
    <p className='inline-block lg:hidden text-base mt-5 md:mt-10 font-medium'>Welcome to Book College Events, your one-stop-shop for affordable and accessible event organizing and booking. Say  goodbye to traditional difficulties and hello to seamless payment  gateways and magnificent event management.

</p>
<div className='mt-8 md:mt-10 flex justify-start items-center text-black gap-2 md:gap-4'>
    <input type="text" placeholder='name@email.com' className='px-2 md:px-5 py-2 bg-[#0079d534] text-black rounded-xl outline-none border border-[gainsboro]' />
    <button className=' shadow-2xl border border-[gainsboro]  text-white px-2 md:px-4 py-2 rounded-xl'>Sign Up</button>
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
            // </div>
  )
}

export default Hero