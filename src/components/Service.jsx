import React from 'react'
import service from '../lib/service'
import clsx from 'clsx';

const Service = () => {
  return (
     <section id='Service'>
        <div className="w-full mx-auto text-center items-center mt-10 mb-10">
            <h2 className='text-xl md:text-3xl font-bold mt-3 '>Managing your business with <br /> our best sevice</h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 md:mx-20 items-stretch'>
                {service.map((item, index) => (
                    <div
                    key={index}
                    className={clsx(
                        'flex flex-col h-full justify-between rounded-xl p-5 transition-all duration-300',
                        'shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:-translate-y-1',
                        item.shadowHover
                    )}
                    >
                        <img src={item.icon} alt="Partner" className='w-10 h-10 md:w-20 md:h-20 object-contain' />
                        <p className='w-3/4 mt-5 text-xl text-start items-start font-semibold my-5'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Service