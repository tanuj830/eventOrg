import React from 'react'

const Payment = () => {

    const plans = [
        {
            "plan_type": "LITE PLAN",
            "plan_cost":"9",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Lite"
        },
        {
            "plan_type": "LITE PLAN",
            "plan_cost":"9",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Lite"
        },
        {
            "plan_type": "LITE PLAN",
            "plan_cost":"9",
            "specs":["Max 50", "2 Events", "Basic Support", "No Customization"],
            "button": "Choose Lite"
        }
    ]

  return (
    <div className=' px-24 mt-20'>

    <div>
        <h2 className='text-[70px] w-3/4 font-bold'>Enjoy an extraordinary event-booking journey with us!</h2>
    </div>

    <div className='grid grid-cols-2 my-10 gap-6'>
        <div className='bg-gradient-to-r from-indigo-500 to-blue-400 text-white border shadow-md rounded-3xl flex justify-center items-center px-10'>
            <h2 className='text-[100px] font-bold'>400</h2>
        </div>
        <div className='bg-gradient-to-r from-indigo-500 to-blue-400 text-white border shadow-md rounded-3xl flex justify-center items-center px-10'>
            <h2 className='text-[20px]'>Events organised all around the globe that exceeded expectations!</h2>
        </div>
    </div>

        {/* payment */}
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Here are some plans for you. Choose your plan wisely.</p>
    </div>
    <div className="flex flex-wrap justify-center -m-4">
   {
    plans.map(plan=>(
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.plan_type}</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>${plan.plan_cost}</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
        {
            plan.specs.map(spec=>(
                <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{spec}
          </p>
            ))
        }
          <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">{plan.button}
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
</section>

{/* how to */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col ">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
        <h1 className="text-gray-900  font-medium text-center  text-[30px] mb-2 sm:mb-0">Curious Minds</h1>
      </div>
    </div>
    <div className="grid grid-cols-3 mt-10 gap-4">
      <div className="p-4 sm:mb-0 mb-6  border rounded-2xl ">
        <div className="rounded-lg  overflow-hidden ">
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Can I change my plan?</h2>
        <p className="text-base leading-relaxed mt-2">Of course! We're all about flexiblity, you can upgrade or downgrade plans anytime you fancy.</p>
      </div>
      <div className="p-4  sm:mb-0 mb-6 border rounded-2xl ">
        <div className="rounded-lg  overflow-hidden ">
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">What about custom events?</h2>
        <p className="text-base leading-relaxed mt-2">No problemo! Just reach out to our event maestros with your ideas and let them work their wonders.</p>
      </div>
      <div className="p-4  sm:mb-0 mb-6 border rounded-2xl ">
        <div className="rounded-lg  overflow-hidden ">
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">How to book an event?</h2>
        <p className="text-base leading-relaxed mt-2">Simply pick your desired plan, contact us and we'll handle the rest magic!</p>
      </div>
    </div>
  </div>
</section>


{/* lets part */}
<section className='py-20'>
    <div className='flex justify-center items-center flex-col'>
        <h2 className='text-[60px] font-semibold'>Let's Party!</h2>
        <p>
            Itching to bring your epic event to life? It's as easy as clicking the button below to get started.
        </p>
        <div  className=' flex items-center justify-center mt-4 gap-4'>
            <button className='rounded-full bg-black text-white font-semibold px-6 py-2'>Book Now</button>
            <button className='rounded-full bg-indigo-500 text-white font-semibold px-6 py-2'>Contact Us</button>
        </div>
    </div>
</section>
    </div>
  )
}

export default Payment