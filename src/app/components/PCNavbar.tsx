import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <header className="text-white body-font ">
  <div className="container mx-auto flex flex-wrap py-3 md:p-5 flex-row justify-between items-center">
    <Link href="/" className="flex title-font font-medium items-center text-white ">
      <span className="ml-3 lg:text-2xl xl:text-4xl uppercase tracking-wider font-extrabold">Collegify</span>
    </Link>
    <nav className="md:ml-auto gap-3 md:gap-5 lg:gap-7 flex flex-wrap items-center text-base justify-center">
      <Link href="/" className=" hover:text-white lg:text-sm xl:text-xl">Home</Link>
      <Link href="/events" className=" hover:text-white lg:text-sm xl:text-xl">Events</Link>
      <Link href="/create-event/user-details" className=" hover:text-white  lg:text-sm xl:text-xl">Profile</Link>
    <Link  href="/signin" className="hidden md:inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-slate-200 rounded text-black hover:text-gray-700 text-base mt-4 md:mt-0">Sign-in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar