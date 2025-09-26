import React from 'react';

function Navbar() {
  return (
    <div className="navbar shadow-md px-6 bg-gray-200">
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        
        {/* Left (Logo) */}
        <div className="navbar-start flex items-center">
          <h1 className="text-black font-bold text-2xl">P.W.K.Co.</h1>
        </div> 

        {/* Center (Navigation Links - Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-bold">
            <li><a href="#hero" className="hover:text-gray-500">Home</a></li>
            <li><a href="#practice-areas" className="hover:text-gray-500">Practice Areas</a></li>
            <li><a href="#profile" className="hover:text-gray-500">Attorneys</a></li>
            <li><a href="#location" className="hover:text-gray-500">Location</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Right (CTA Button - Desktop) */}
        <div className="navbar-end hidden lg:flex">
          <a href="#cta">
            <button className="btn btn-outline text-black border-black font-bold hover:bg-gray-800 hover:text-white hover:border-gray-800 transition">
              Consultation
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black"
            >
              <li><a href="#hero">Home</a></li>
              <li><a href="#practice-areas">Practice Areas</a></li>
              <li><a href="#profile">Attorneys</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="#cta" className="font-semibold text-black">Consultation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
