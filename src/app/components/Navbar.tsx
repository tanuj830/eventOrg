import React from 'react'
import PCNavbar from "./PCNavbar"
import MobileNav from "./MobileNavbar"
const Navbar = () => {
  return (
    <div>
    <div className='hidden w-full md:block sticky top-[-280px]'><PCNavbar/></div>
    <div className='block w-full md:hidden  fixed  bottom-0 z-[100]'  ><MobileNav/></div>
    </div>
  )
}

export default Navbar