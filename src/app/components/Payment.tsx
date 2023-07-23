import React from 'react'

const Payment = () => {

    const plans = [
        {
            "plan_type": "Starter",
            "plan_cost":"9",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Lite"
        },
        {
            "plan_type": "Pro",
            "plan_cost":"19.99",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Pro"
        },
        {
            "plan_type": "Titan",
            "plan_cost":"34",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Titan"
        }
    ]

  return (
    <>
    
   <div className='bg-white p-5 md:p-8 lg:pb-0 lg:p-60  bg-[url(https://cdn.thecodehelp.in/bkzxjg9fxeaiuej76vdd_9e7b388222.png)] bg-no-repeat'>
    
    <div className='flex items-center md:flex-row flex-col md:justify-center '>
      <div className='md:w-1/2'><h2 className='md:text-center text-[40px] md:text-[70px] font-extrabold site_color'>Effortless Events</h2></div>
      <div className='md:w-1/2'><h6 className='font-medium text-xl '>Book College Events empowers organizers to  create stunning college events with just a few  clicks. Focus on making your events amazing while  we handle the tedious booking process.</h6></div>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
        <div>
          <img className='rounded-3xl' src="https://framerusercontent.com/images/LwEZyNMIoQY9PRxG85u3fhKm8.jpg" alt="" />
          <h2 className='text-black font-bold text-xl mt-6'>Student Meetups</h2>
          <h3 className='text-gray-600 text-lg mt-2 font-[400]'>Engage with peers and discover  new opportunities at campus  clubs and gatherings.</h3>
        </div>
        <div>
          <img className='rounded-3xl' src="https://framerusercontent.com/images/LwEZyNMIoQY9PRxG85u3fhKm8.jpg" alt="" />
          <h2 className='text-black font-bold text-xl mt-6'>Talent Shows</h2>
          <h3 className='text-gray-600 text-lg mt-2 font-[400]'>Witness the mesmerizing  abilities of your fellow students  at talent shows.</h3>
        </div>
        <div>
          <img className='rounded-3xl' src="https://framerusercontent.com/images/LwEZyNMIoQY9PRxG85u3fhKm8.jpg" alt="" />
          <h2 className='text-black font-bold text-xl mt-6'>Live Concerts</h2>
          <h3 className='text-gray-600 text-lg mt-2 font-[400]'>Dance the night away at  electrifying concerts catered to  college students.</h3>
        </div>
    </div>

    {/* payment */}
    <div className="grid grid-cols-1 lg:grid-cols-3  md:gap-4  mt-16 lg:mt-44">
 {
plans.map(plan=>(
    <div className="p-4 w-full">
    <div className="h-full p-6 rounded-3xl bg-slate-100 flex flex-col relative overflow-hidden">
      {/* <span className="bg-[#004E89] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span> */}
      <h2 className="text-xs tracking-widest title-font uppercase  mb-4 font-medium">{plan.plan_type}</h2>
      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
        <span className='font-extrabold'>${plan.plan_cost}</span>
        <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
      </h1>
    {
        plan.specs.map(spec=>(
            <p className="flex items-center text-black mb-2">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center site_bg_color text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>{spec}
      </p>
        ))
    }
      <button className="flex items-center   mt-auto text-white site_bg_color border-0 py-2 px-4  w-full focus:outline-none hover:bg-[#004E89] rounded">{plan.button}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
))
}
</div>
   </div>
   <section className='bg-white lg:py-36 py-20 '>
    <h2 className='lg:text-[140px] text-[44px] text-center font-[900]'>STAY UPDATED</h2>
    <div className='hidden  lg:flex justify-center items-center'>
        <p className='pt-4  text-[#004e89]'>Don’t miss out on the latest happenings and event tips. Sign up <br /> for our newsletter and keep living the eventful college life!</p>
    </div>
    <p className='p-4  text-[#004e89] lg:hidden  font-medium inline-block text-center'>Don’t miss out on the latest happenings and event tips. Sign up for our newsletter and keep living the eventful college life!</p>
    <div className='mt-5 md:mt-7 flex justify-center items-center text-black gap-2 md:gap-4'>
    <input type="text" placeholder='name@email.com' className='px-2 md:px-5 py-2 bg-slate-100 text-black rounded-xl outline-none border border-[gainsboro]' />
    <button className='site_bg_color text-white px-2 md:px-4 py-2 rounded-xl'>Subscribe</button>
</div>
   </section>
   </>
  )
}

export default Payment



// <div className=' px-24 mt-20'>

// <div>
//     <h2 className='text-[70px] w-3/4 font-bold'>Enjoy an extraordinary event-booking journey with us!</h2>
// </div>

// <div className='grid grid-cols-2 my-10 gap-6'>
//     <div className='bg-gradient-to-r from-[#004E89] to-blue-400 text-white border shadow-md rounded-3xl flex justify-center items-center px-10'>
//         <h2 className='text-[100px] font-bold'>400</h2>
//     </div>
//     <div className='bg-gradient-to-r from-[#004E89] to-blue-400 text-white border shadow-md rounded-3xl flex justify-center items-center px-10'>
//         <h2 className='text-[20px]'>Events organised all around the globe that exceeded expectations!</h2>
//     </div>
// </div>

//     {/* payment */}
//     <section className="text-gray-600 body-font overflow-hidden">
// <div className="container px-5 py-24 mx-auto">
// <div className="flex flex-col text-center w-full mb-20">
//   <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
//   <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Here are some plans for you. Choose your plan wisely.</p>
// </div>
// <div className="flex flex-wrap justify-center -m-4">
// {
// plans.map(plan=>(
//     <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
//     <div className="h-full p-6 rounded-lg border-2 border-[#004E89] flex flex-col relative overflow-hidden">
//       <span className="bg-[#004E89] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
//       <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.plan_type}</h2>
//       <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
//         <span>${plan.plan_cost}</span>
//         <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
//       </h1>
//     {
//         plan.specs.map(spec=>(
//             <p className="flex items-center text-gray-600 mb-2">
//         <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//             <path d="M20 6L9 17l-5-5"></path>
//           </svg>
//         </span>{spec}
//       </p>
//         ))
//     }
//       <button className="flex items-center mt-auto text-white bg-[#004E89] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#004E89] rounded">{plan.button}
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7"></path>
//         </svg>
//       </button>
//     </div>
//   </div>
// ))
// }
// </div>
// </div>
// </section>

// {/* how to */}
// <section className="text-gray-600 body-font">
// <div className="container px-5 py-20 mx-auto">
// <div className="flex flex-col ">
//   <div className="h-1 bg-gray-200 rounded overflow-hidden">
//     <div className="w-24 h-full bg-[#004E89]"></div>
//   </div>
//   <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
//     <h1 className="text-gray-900  font-medium text-center  text-[30px] mb-2 sm:mb-0">Curious Minds</h1>
//   </div>
// </div>
// <div className="grid grid-cols-3 mt-10 gap-4">
//   <div className="p-4 sm:mb-0 mb-6  border rounded-2xl ">
//     <div className="rounded-lg  overflow-hidden ">
//     </div>
//     <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Can I change my plan?</h2>
//     <p className="text-base leading-relaxed mt-2">Of course! We're all about flexiblity, you can upgrade or downgrade plans anytime you fancy.</p>
//   </div>
//   <div className="p-4  sm:mb-0 mb-6 border rounded-2xl ">
//     <div className="rounded-lg  overflow-hidden ">
//     </div>
//     <h2 className="text-xl font-medium title-font text-gray-900 mt-5">What about custom events?</h2>
//     <p className="text-base leading-relaxed mt-2">No problemo! Just reach out to our event maestros with your ideas and let them work their wonders.</p>
//   </div>
//   <div className="p-4  sm:mb-0 mb-6 border rounded-2xl ">
//     <div className="rounded-lg  overflow-hidden ">
//     </div>
//     <h2 className="text-xl font-medium title-font text-gray-900 mt-5">How to book an event?</h2>
//     <p className="text-base leading-relaxed mt-2">Simply pick your desired plan, contact us and we'll handle the rest magic!</p>
//   </div>
// </div>
// </div>
// </section>


// {/* lets part */}
// <section className='py-20'>
// <div className='flex justify-center items-center flex-col'>
//     <h2 className='text-[60px] font-semibold'>Let's Party!</h2>
//     <p>
//         Itching to bring your epic event to life? It's as easy as clicking the button below to get started.
//     </p>
//     <div  className=' flex items-center justify-center mt-4 gap-4'>
//         <button className='rounded-full bg-black text-white font-semibold px-6 py-2'>Book Now</button>
//         <button className='rounded-full bg-[#004E89] text-white font-semibold px-6 py-2'>Contact Us</button>
//     </div>
// </div>
// </section>
// </div>