import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex bg-gray-200 items-center justify-center text-center min-h-[75vh] px-6 sm:px-10 md:px-16 lg:px-20"
       
    >
      {/* Content */}
      <div className="max-w-3xl text-black">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        P.W. Kamotho & Co. Advocates
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl italic text-teal-800 font-bold">
         Trusted Counsel for Every Step Forward
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-600 transition w-full sm:w-auto">
            Book Consultation
          </button>
          <button className="border border-teal-500 text-teal800 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;