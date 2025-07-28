import React from 'react'
import topBg from '/assets/Footer/footer.jpg';    
import bottomBg from '/assets/Footer/footer2.jpg';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      {/* ===== BOTTOM SECTION with BG + OVERLAY ===== */}
        <div
        className="relative bg-cover bg-center text-white py-10 px-4 md:px-20"
        style={{ backgroundImage: `url(${bottomBg})` }}
        >

        <div className="absolute inset-0 bg-black opacity-90 z-0"></div>



        {/* ===== TOP BLUE SECTION with BG + OVERLAY ===== */}
        <div
        className="relative bg-cover bg-center text-white py-10 rounded-4xl my-10 overflow-hidden"
        style={{ backgroundImage: `url(${topBg})` }}
        >
            <div className="absolute inset-0 bg-[#00359C] opacity-80 z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-16 items-start ">
                <div className='flex items-start gap-3 px-4'>
                        <img src="/assets/Footer/logo-location.png" alt="location" className="w-[60px] h-[60px]"/>
                    <div>
                        <p className="font-semibold text-xs my-2">Office Location</p>
                        <p className="font-normal text-sm max-w-[200px]">Bogor, Indonesia</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 px-4'>
                        <img src="/assets/Footer/logo-email.png" alt="email" className="w-[60px] h-[60px]"/>
                    <div>
                        <p className="font-semibold text-xs my-2">Send Email</p>
                        <p className="font-normal text-sm max-w-[200px]">inspiradaya.id@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 px-4'>
                        <img src="/assets/Footer/logo-phone.png" alt="phone" className="w-[60px] h-[60px]"/>
                    <div>
                        <p className="font-semibold text-xs my-2">Call Phone</p>
                        <p className="font-normal text-sm max-w-[200px]">+62 856 9322 8743</p>
                    </div>
                </div>
            </div>
        </div>



        {/* ===== MAIN CONTENT ===== */}
        <div className="relative z-10 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-20 px-4 md:py-6">
          {/* Column 1 - Logo + Description */}
          <div className='col-span-1 md:col-span-2'>
            <img 
              src="/assets/LogoPutih-InspiraDaya.png" 
              alt="Logo Inspira" 
              className='w-1/4 mb-3' 
            />

            <p className="text-sm text-gray-400 max-w-max">
              Agensi kreatif digital yang siap membantu bisnis tumbuh melalui strategi visual, teknologi, dan komunikasi yang berdampak.
            </p>

            <div className="flex gap-4 mt-4 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white hover:text-blue-500"
              >
                <IconBrandFacebook size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white hover:text-blue-500"
              >
                <IconBrandLinkedin size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white hover:text-blue-500"
              >
                <IconBrandGithub size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white hover:text-blue-500"
              >
                <IconBrandInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Column 2 - Find Events */}
          <div className='w-auto max-w-[300px]'>
            <h3 className="text-lg font-semibold mb-3">Find <span className="text-blue-500">Service</span></h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Web & Mobile Development</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Design & Creative</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Editing Video & Animation</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Branding & Marketing</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className='w-auto max-w-[300px]'>
            <h3 className="text-lg font-semibold mb-3">Useful <span className="text-blue-500">Links</span></h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Home</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">About</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Our Team</a>
              </li>
              <li className='hover:text-blue-500 transition-all duration-200 hover:ml-2'>
                <a href="">Subscribe</a>
              </li>
            </ul>
          </div>


        </div>

        {/* Copyright */}
        <div className="relative z-10 text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © 2025, Akhfabgss All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
