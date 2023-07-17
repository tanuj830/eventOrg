'use client'
import React, { useState } from 'react'
import Payment from '../components/Payment'
import Sidebar from '../components/Sidebar'

const page = () => {
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(true)

  return (
    <div className='bg-white h-[100vh] '>
        {
            !isPaymentCompleted ? <Payment/> :
             <div className='flex'>
                <Sidebar/>    
                <div>
                    h
                </div>
            </div>
        }
    </div>
  )
}

export default page