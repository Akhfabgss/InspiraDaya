import React from 'react'
import reasons from '../lib/reason.js'

const Reason = () => {
  return (
    <section id="Reason">
      <div className='w-full text-center items-center mt-20'>
        <h3 className='text-md font-normal text-[#00359C]'>- Why choose us -</h3>
        <h2 className='text-xl md:text-3xl font-bold mt-3 mx-auto'>Reasons to Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full justify-between rounded-xl p-5 transition-all duration-300 
                         shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-white text-gray-800 
                         hover:bg-[#00359C] hover:text-white"
            >
              {/* Badge number */}
              <div className="absolute -top-3 left-4 px-3 py-1 rounded-md shadow text-sm md:text-lg font-bold 
                             bg-gray-100 text-gray-800 
                             group-hover:text-[#00359C]">
                {reason.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-5 py-3 px-5">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm px-5 mb-5">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reason
