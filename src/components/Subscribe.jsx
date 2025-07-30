import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await fetch('http://localhost:5000/api/send-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        });

        const data = await response.json();
        toast.success(data.message); // pakai notifikasi yang lebih bagus
    } catch (err) {
        console.error(err);
        toast.error('Gagal mengirim email.');
    } finally {
        setLoading(false);
    }
    };




  return (
    <section id='Subscribe' className="w-full mx-auto items-center mt-10 mb-10">
        <div className="flex justify-center bg-[#00359C] py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-20 my-auto">
            
            {/* Kiri - Konten Teks */}
            <div className="text-white space-y-4 flex flex-col justify-center mx-4 md:mx-0">
            <p className="text-sm text-yellow-300 font-medium">Get every update</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Ketik email untuk dapatkan pricelist InspiraDaya!
            </h2>

            <div className="flex rounded-lg overflow-hidden border border-white w-full max-w-md">
                <form onSubmit={handleSubmit} className='w-full max-w-md flex'>
                    <input
                    type="email"
                    placeholder="Enter your mail"
                    className="flex-grow px-4 py-3 text-white focus:outline-none"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <button 
                    type="submit" 
                    className="bg-white hover:bg-gray-200 text-[#00359C] text-sm md:text-md font-semibold px-4 md:px-6 flex items-center"
                    disabled={loading}>
                        {loading ? 'Sending...' : 'Subscribe'} <i className="ri-arrow-right-s-line"></i>
                    </button>
                </form>
            </div>
            </div>

            {/* Kanan - Ilustrasi/Gambar */}
            <div className="flex justify-center md:justify-end">
            <img
                src="/assets/sendEmail-image.png"
                alt="Subscribe visual"
                className="w-full md:w-full"
            />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Subscribe