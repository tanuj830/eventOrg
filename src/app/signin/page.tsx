import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
const Signin = () => {


   

  return (
<>
<div className="mt-5 h-screen">
<div className="flex  items-center mt-6  md:mt-40 justify-center">
  <div className="md:px-20 px-14 py-6 shadow-xl bg-white" style={{ borderRadius: 10 }}>
    <div className="text-center mb-2">
      <h1>
        <h1 className='uppercase'>Log-in</h1>
      </h1>
      <hr />
    </div>
    <form action="post" className='mt-4' >
            <div className='flex justify-center flex-col'>
                <div>
                <input className=' border-b border-slate-300 px-4 py-1 mt-4 hover:border-slate-900' type="email" autoComplete='off' name='email'  placeholder='E-mail' />
                </div>
                <div>
                <input className='border-b border-slate-300 px-4 py-1 mt-4 hover:border-slate-900' type="password" autoComplete='off' name='password'  placeholder='Password' />
                </div>
                <button className='border rounded-sm mt-4 border-slate-800 uppercase'> Submit </button>
            </div>
               <div className='text-center'>
               <Link href="/signin/register" className='text-blue-700 text-xs'>create account </Link>
               </div>
        </form>
  </div>
</div>
</div>
      <div className='relative '>
          <div className='absolute mix-blend-multiply filter blur-lg opacity-80 animate-pulse bg-color1 top-0  left-5 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color2 top-0 left-28 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color3 top-12 bottom-8 left-20 rounded-full w-60 h-40'></div>
        </div>
        </>
  )
}

export default Signin



