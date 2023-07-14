import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-white body-font shadow-md bg-[#004E89]">
  <div className="container mx-auto flex flex-wrap p-3 md:p-5 flex-row justify-between items-center">
    <a className="flex title-font font-medium items-center text-white ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Collegify</span>
    </a>
    <nav className="md:ml-auto gap-3 md:gap-5 lg:gap-7 flex flex-wrap items-center text-base justify-center">
      <a className=" hover:text-white">Home</a>
      <a className=" hover:text-white">Events</a>
      <a className=" hover:text-white">Pricing</a>
    <button className="hidden md:inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-slate-200 rounded text-black hover:text-gray-700 text-base mt-4 md:mt-0">Sign-in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar