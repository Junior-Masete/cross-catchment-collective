import React from 'react'
import heroImage from "../assets/bannerphoto.png";
import pattern from "../assets/home_banner.png"; // Optional

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#EEF3EF]"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <p className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#22613C] leading-tight">
              PROTECTING SOUTH AFRICA's
              <br />
              CATCHMENTS TOGETHER
            </p>

            <p className="mt-6 max-w-xl text-xl text-[#2E613F] leading-relaxed mx-auto lg:mx-0">
              Restoring water, land and biodiversity through collaboration,
              science and community action.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="px-8 py-3 rounded-md bg-[#22613C] text-white font-medium hover:bg-[#1C5334] transition">
                About Us
              </button>

              <button className="px-8 py-3 rounded-md border border-[#22613C] text-[#22613C] font-medium hover:bg-[#22613C] hover:text-white transition">
                Get in Touch
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Main Circle */}

              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden shadow-xl">

                <img
                  src={heroImage}
                  alt="Catchment restoration"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Orange Circle */}

              <div className="absolute -top-8 -right-8 lg:-top-6 lg:-right-6 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-[#EB813A]" />

              {/* Green Circle */}

              <div className="absolute -bottom-6 left-4 lg:left-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#22613C]" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;