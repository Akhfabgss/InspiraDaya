import React from 'react';
import teamMembers from '../lib/teamMember';

const OurTeam = () => {
  return (
    <section id='OurTeam' className="py-12 px-4">
        <div className="w-full mx-auto text-center items-center mb-20">
            <h2 className='text-xl md:text-3xl font-bold mt-3'>Meet Our Team</h2>
            <p className="text-gray-700 mb-6 px-2 md:px-60 mt-5">Kami adalah tim muda yang kreatif, adaptif, dan punya semangat tinggi untuk membantu Anda tumbuh lewat desain dan teknologi.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-10">
                {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center rounded-xl transition-all duration-300"
                >
                    <div className="w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    </div>

                    {/* Floating Info Box */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white px-5 py-4 rounded-xl text-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                    <h3 className="text-lg font-bold text-gray-800">
                        {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.position}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default OurTeam;
