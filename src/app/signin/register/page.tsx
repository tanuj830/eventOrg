import React from 'react'

const page = () => {
  return (
    <div className="h-screen ">
    <div className="items-center flex justify-center h-[100vh]">
      <div >
        <form
          className="   flex justify-center  p-4 md:p-0 items-center text-center lead"
          action="post"
          
        >

          <div className='  hover:shadow-lg lg:w-[35vw] transition-all duration-700 flex flex-col border border-[gainsboro] rounded-3xl md:w-[50%] w-full md:px-10 px-4 md:py-6 py-5'>
          <div>
            <h3 className='text-2xl text-start font-bold tracking-wider text-white mt-4'>Register Yourself!</h3>
            <h6 className='text-start text-xs text-slate-200 mt-1'>Create account and get the access to use this platform <br/>and it's absolutely free.</h6>
          </div>
          <div className='mt-2'>
            <input
              type="text"
              name="name"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              placeholder="Name"
              autoComplete="off"
               
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              placeholder="E-mail"
              autoComplete="off"
              
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="phone"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              autoComplete="off"
              
            />
          </div>

          <div className="mt-3 d-flex flex-column">
            <div>
              {/* <label className="mx-2">Password</label> */}
              <input
                type="password"
                className="px-3 py-2 lead w-full border-b outline-none"
                style={{fontSize:16}}
                placeholder="Password"
                name="password"
                autoComplete="off"
                
              />

            </div>
            <div></div>
         
          <button className=" mt-3 px-5 rounded-xl py-2 bg-white btn text-black">
            Create Account
          </button>
        
          </div>

          </div>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default page