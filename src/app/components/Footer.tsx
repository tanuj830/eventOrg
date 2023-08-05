'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {

  const [login, setLogin] = useState(true)

  return (
    <div className='bg-[url(https://geekyglam.in/_next/static/media/blurfooter-min.d7be4e25.png)] border-t border-slate-200 text-white px-5 pt-10 md:px-10 md:pt-10 lg:px-24 lg:pt-24  bg-no-repeat  overflow-hidden w-full h-fit bg-cover z-[-1] absolute left-0'>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div>
                    <Link className="cursor-pointer text-[30px] font-extrabold" href="/">
                     COLLEGIFY
                    </Link>
                    <h6 className='text-[16px] text-slate-200 font-semibold py-4'>Questions? Reach us Contact us at the below number</h6>
                    {/* <a href='tel:7668088539' className='text-[16px] font-medium py-4'>+91 - 766 808 8539</a> */}
                </div>
                <div className='flex flex-col gap-10 text-white font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>COMPANY</h2>
                    <div className='flex flex-col gap-2'>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">About Me</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Blog</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Contact</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10 text-white font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>SERVICES</h2>
                    <div className='flex flex-col gap-2'>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Web Design & Development</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Blockchain</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">SEO</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10 text-white font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>CONNECT</h2>
                    <div className='flex items-center gap-6 md:gap-8'>
        <Link className='hover:scale-110 hover:text-indigo-100 transition-all duration-300 text-4xl' href="https://github.com/tanuj830">
          <AiFillGithub />
        </Link>
        <Link className='hover:scale-110 hover:text-indigo-100 transition-all duration-300 text-4xl' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </Link>
        <Link className='hover:scale-110 hover:text-indigo-100 transition-all duration-300 text-4xl' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </Link>
        <Link className='hover:scale-110 hover:text-indigo-100 transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />

        </Link>
      </div>
                </div>
            </div>
            {
              // login ? <button className='bg-[#00DA92] px-8 py-3 my-10 rounded-full  text-black text-sm '>Sign-out</button>: <button className='bg-[#00DA92] px-8 py-3 my-10 rounded-full  text-black text-sm '>Sign-in</button>
            }
            <div className='my-16'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-slate-200 tracking-[1px] text-sm font-medium'>© 2023 Collegify. ALL RIGHTS RESERVED.</h2>
                    <h2 className='text-slate-200 tracking-[1px] text-sm font-medium'>Developer by: CZAR Services</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer