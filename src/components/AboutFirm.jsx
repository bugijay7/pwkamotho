import React from "react";

function AboutFirm() {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 bg-gray-200 text-black"
    >
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-teal-800">
          About P.W. Kamotho & Co. Advocates
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black mb-6">
          <span className="font-semibold text-teal-800">P.W. Kamotho & Co. Advocates</span> is
          a distinguished law firm dedicated to delivering outstanding legal
          solutions for individuals, businesses, and organizations. Guided by
          professionalism, integrity, and a client-first approach, we strive to
          achieve meaningful results that safeguard the interests of those we
          serve.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black">
          Our team combines deep legal expertise with personalized attention,
          ensuring every client receives practical guidance and effective
          representation. From advisory services to courtroom advocacy, we are
          committed to protecting your rights and walking with you through each
          stage of the legal journey.
        </p>
      </div>
    </section>
  );
}

export default AboutFirm;
