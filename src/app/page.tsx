import React from 'react'

const page = () => {
  return (
    <div className='bg-neutral-300 h-[1073px]'>
      <nav className='bg-neutral-400 border-2 border-slate-800'>
        <h1 className='text-center font-bold lg:text-4xl text-2xl'>Data Fetching Assignment</h1>
        <h2 className='text-center text-slate-800 lg:text-2xl text-xl pt-2 pb-3'>Created by Vaneeza Khan</h2>
      </nav>
       <div className='lg:m-0 mx-4'>
       <div className='container lg:my-80 my-44 mx-auto lg:w-[580px] lg:h-[300px] h-[450px]  rounded-xl bg-neutral-400 border-2 border-black '>
       <h1 className="text-center text-2xl font-bold">Welcome To The Data Fetching Application</h1>
       <p className="text-center text-xl text-slate-800 pt-2">Select a method to fetch data!</p>
        <div className='flex justify-center items-center pt-8'>
        <div className='grid lg:grid-cols-2 gap-8 '>
        <a href='ClientSideData'> 
        <button className='bg-neutral-800 text-slate-200 text-2xl w-[250px] lg:h-[180px] h-[120px] rounded-xl hover:bg-gradient-to-r from-cyan-600 via-cyan-900 to-cyan-950 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110 '>Client-Side Data Fetching
        </button>
        </a>
        <a href='ServerSideData'>
        <button className='bg-neutral-800 text-slate-200 text-2xl w-[250px] lg:h-[180px] h-[120px] rounded-xl hover:bg-gradient-to-r from-cyan-600 via-cyan-900 to-cyan-950 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110 '>Server-Side Data Fetching</button>
        </a>
        </div>
        </div>
       </div>
       </div>
  
    </div>
  )
}

export default page
