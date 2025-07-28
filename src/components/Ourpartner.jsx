import React from 'react'
import ourpartner from '../lib/ourpartner';

const Ourpartner = () => {
  return (
    <section id='ourpartner'>
        <div id='ourpartner' className="w-full mx-auto text-center items-center mt-10 mb-10">
            <h3 className='text-md font-normal text-[#00359C]'>Our Partners</h3>
            <h2 className='text-xl md:text-3xl font-bold mt-3 '>We work with the best partner</h2>

            <div className='items-center justify-center gap-8 grid grid-cols-1 md:grid-cols-4 mt-10 md:mx-20'>
                {ourpartner.map((logo, index) => (
                    <div 
                    key={index} 
                    className="w-full h-20 shadow-[0_0_20px_rgba(0,0,0,0.2)] my-auto rounded-xl p-3 flex items-center justify-center">
                        <img src={logo} alt="Partner" className='w-full h-full object-contain' />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Ourpartner