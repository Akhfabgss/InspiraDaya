import React, { useState } from 'react';
import { aboutTabs, aboutImage } from '../lib/about';

const About = () => {
    const [activeTab, setActiveTab] = useState('siapa');

    const tabClasses = (tab) =>
        `px-4 py-2 rounded font-semibold transition-all duration-200 ${
        activeTab === tab
            ? 'bg-[#00359C] text-white'
            : 'bg-gray-100 text-black hover:bg-blue-500'
        }`;


  return (
    <section id='about' className="w-full flex flex-col md:flex-row justify-center items-center py-10 gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img src={aboutImage[0]} alt="About Us" className="w-full h-auto rounded-2xl" />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 rounded-lg">
        <h3 className='text-md font-normal text-[#00359C]'>Tentang Kami</h3>

        <h2 className="text-xl md:text-3xl font-bold mb-4">
          {aboutTabs[activeTab].title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <button className={tabClasses('siapa')} onClick={() => setActiveTab('siapa')}>
            Siapa Kami?
          </button>
          <button className={tabClasses('visi')} onClick={() => setActiveTab('visi')}>
            Visi
          </button>
          <button className={tabClasses('misi')} onClick={() => setActiveTab('misi')}>
            Misi
          </button>
        </div>

        {/* Description */}
        {Array.isArray(aboutTabs[activeTab].content) ? (
            <ul className="list-disc ml-5 text-gray-700 mb-6 space-y-2">
                {aboutTabs[activeTab].content.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-700 mb-6">{aboutTabs[activeTab].content}</p>
        )}

        {/* CTA Button */}
        <button className="bg-[#00359C] text-white font-bold px-4 py-3 rounded hover:bg-[#00355C] transition">
          {aboutTabs[activeTab].button}
        </button>
      </div>
    </section>
  )
}

export default About