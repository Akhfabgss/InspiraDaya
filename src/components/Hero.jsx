import React from 'react'

const Hero = () => {
  return (
    <div id='Hero' className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>

        <div className="deskripsi md:mt-20">
            <span className='w-full md:w-3/5 flex items-center gap-2 mb-4 bg-[#00359C] text-white px-5 py-5 rounded-3xl'>

                <i className="ri-vip-crown-2-line"></i>
                <h3>
                    Top Creative Agency Group in 2025
                </h3>
            </span>

            <h1 className='text-3xl md:text-5xl font-bold text-black leading-normal'>Crafting Digital Solutions, Amplifying Your Brand</h1>

            <p className='text-sm md:text-lg'>Kami adalah agensi kreatif berbasis teknologi yang membantu UMKM, startup, dan korporasi membangun identitas digital yang kuat dan berdampak. Mulai dari branding hingga solusi digital interaktif, kami hadir untuk mempercepat transformasi digital Anda.</p>

            <div className='flex items-center mt-5'>
                <a href='#'className="flex items-center space-x-2 bg-transparent hover:bg-[#00359C] text-[#00359C] hover:text-white font-medium border-2 border-[#00359C] hover:border-transparent rounded px-4 py-3 transition duration-300 ease-in-out w-fit"
                >
                Explore More <i className="ri-arrow-right-s-line"></i>
                </a>
            </div>
        </div>

        <div className="ImageHero">
            <img
                src='/assets/LandingPage.png'
                alt="Hero Image"
                className="w-[550px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
                loading="lazy"
            />
        </div>

    </div>
  )
}

export default Hero