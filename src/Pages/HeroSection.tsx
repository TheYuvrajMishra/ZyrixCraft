import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-white flex h-screen items-center justify-center bg-gradient-to-b from-[#904C77] to-[#ECB8A5]">
      
      {/* Gradient fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-[#000000] opacity-100"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: 'url("./public/01.png")' }}></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#ffffff]">
          Welcome to ZyrixCraft
        </h1>
        <p className="text-lg md:text-xl mb-6 text-[#e2e2e2]">
          We specialize in bringing your ideas to life with our services in
          <span className="font-semibold text-[#ffffff]"> Web Development, UI/UX Designs,</span>
          and
          <span className="font-semibold text-[#fbdfe7]"> Graphic Designs.</span>
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#services"
            className="bg-[#f4d9cf] text-gray-900 border px-6 py-3 rounded-full text-lg font-medium hover:bg-transparent hover:border hover:border-dashed hover:border-white hover:text-white transition duration-300"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white border-dashed text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white duration-300 hover:text-gray-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
