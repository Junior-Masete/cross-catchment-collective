import React from 'react'
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/bannerphoto.png";
import pattern from "../assets/home_banner5.png"; // Optional

function Hero() {
  const navigate = useNavigate();

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

            <p className="text-2xl md:text-5xl xl:text-4xl font-extrabold text-[#2E613F] pb-1 leading-none">
              Protecting South Africa's
              <br />
              Catchments Together
            </p>

            <p className="mt-6 max-w-xl text-xl text-[#fff] md:text-[#2E613F] leading-tight mx-auto lg:mx-0">
              Restoring water, land and biodiversity through collaboration,
              science and community action.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button onClick={() => navigate("/about-us")} className="px-8 py-3 rounded-md bg-[#22613C] text-white font-medium hover:bg-[#fff] hover:text-[#22613C] transition">
              
                About Us
              </button>

              <button className="px-8 py-3  bg-[#fff] rounded-md text-[#22613C] font-medium hover:bg-[#22613C] hover:text-white transition">
                Get in Touch
              </button>

            </div>

          </div>

          {/* Right Image */}
          {/* <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative"> */}

              {/* Main Circle */}

              {/* <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden shadow-xl">

                <img
                  src={heroImage}
                  alt="Catchment restoration"
                  className="w-full h-full object-cover"
                />

              </div> */}

              {/* Orange Circle */}

              {/* <div className="absolute -top-8 -right-8 lg:-top-6 lg:-right-6 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-[#EB813A]" />*/}

              {/* Green Circle */}

              {/* <div className="absolute -bottom-6 left-4 lg:left-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#22613C]" />

            </div>  

          </div>*/}

        </div>

      </div>
    </section>
  );
}

export default Hero;