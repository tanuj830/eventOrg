import React from 'react'

const Hero = () => {
  return (
<div className='h-[90vh] px-24'>
<div className=''>
<div className='flex items-center justify-center gap-10 border-b border-[gainsboro] p-10'>
        <div className=''>
            <h2 className='text-[100px] font-bold'>BOOK</h2>
        </div>
        <div>
            <p className='text-slate-600'>Welcome to the world of unparalled event <br/> booking experiences!  we make event organization and booking <br/> feel like sipping fine wine on a saturday evening.</p>
        </div>
    </div>
    <div className='grid grid-cols-3 gap-2 mt-20'>
        <img className='rounded-l-3xl' src="https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="https://images.pexels.com/photos/2306278/pexels-photo-2306278.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img className='rounded-r-3xl' src="https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
</div>
</div>
  )
}

export default Hero