import React from 'react'
import {AiOutlineContacts, AiOutlineHome} from 'react-icons/ai'
import {BsPeople, BsCalendar2EventFill} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import {RiLoginCircleFill} from 'react-icons/ri'
import Link from 'next/link'
const mobileNav = () => {

    // const [isActive, setIsActive] = React.useState(0)

    const links = [
        {
            "links":"/",
            "name": "home",
            "icon": <AiOutlineHome/>
        },
        {
            "links":"/events",
            "name": "events",
            "icon": <BsCalendar2EventFill/>
        },
        {
            "links":"/create-event/user-details",
            "name": "profile",
            "icon": <MdPermContactCalendar/>
        },
        {
            "links":"/",
            "name": "sign-up",
            "icon": <RiLoginCircleFill/>
        },
    ]

    // const handleClick = (ind) =>{
    //     setIsActive(ind)
    // }
  return (
    <div className=' site_bg_color border-t-2 w-full py-2'>
        <div className='flex items-center justify-around text-white'>
           {
            links.map((link, ind)=>(
                // onClick={ind=>handleClick(ind)} 
                <div  className='flex flex-col items-center justify-center'>
                {/* {
                    isActive === ind ? <div className='text-xl text-black'>{link.icon}</div>: <div className='text-2xl'>{link.icon}</div>
                } */}
                <div className='text-2xl'>{link.icon}</div>
                <Link href={(link.links)} className='text-sm'>{link.name}</Link>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default mobileNav