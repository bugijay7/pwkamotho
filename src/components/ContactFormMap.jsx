import React from 'react';

function ContactFormMap() {
  return (
    <section
      id="location"
      className="py-16 px-6 sm:px-10 md:px-16 bg-gray-200"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-800">
          Our Location
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Visit us at our offices — we are always ready to serve you.
        </p>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto relative w-full h-[450px]">
        <iframe
          title="P.W. Kamotho & Co. Advocates Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.837060206258!2d36.65366137496563!3d-1.2447262987586546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f1cc8987607%3A0xb590de4dca21ed58!2sP.W.%20Kamotho%20%26%20Co.%20Advocates!5e0!3m2!1sen!2ske!4v1727274549271!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        />
        <noscript>
          <p className="text-center text-gray-500 mt-4">
            Map cannot be displayed. Please{" "}
            <a
              href="https://www.google.com/maps/place/P.W.+Kamotho+%26+Co.+Advocates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(41,32,99)] underline"
            >
              view on Google Maps
            </a>
            .
          </p>
        </noscript>
      </div>
    </section>
  );
}

export default ContactFormMap;
