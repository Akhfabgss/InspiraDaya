import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar sticky top-0 z-50 w-11/12 md:w-full bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-between py-3 px-4 mx-auto mt-5">
      
      {/* Logo */}
      <div className="logo">
        <img src="/assets/Logo-InspiraDaya.png" alt="Logo" className="w-14 h-10 md:w-22 md:h-16 p-2" />
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`menu absolute mt-2 md:mt-0 top-full left-0 w-full bg-white flex-col gap-4 items-center py-4 shadow-md rounded-b-2xl transition-all duration-300 md:static md:flex md:flex-row md:gap-3 xl:gap-10 md:shadow-none md:py-0 md:w-auto ${isOpen ? "flex" : "hidden"}`}>
        {["Home", "About", "Service", "Features"].map((item, index) => (
          <li key={index}>
            <a href="#" className="md:text-sm lg:text-lg font-medium block hover:text-[#00359C]">{item}</a>
          </li>
        ))}
      </ul>

      {/* Call Button (Hidden in mobile if menu open, to keep clean layout) */}
      <div className={`hidden md:block`}>
        <a
          href="tel:08123456789"
          className="inline-flex items-center px-4 py-2 border border-[#00359C] rounded-full text-[#00359C] hover:bg-[#00359C] hover:text-white transition"
        >
          <i className="ri-phone-line mr-2"></i>
          Call Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
