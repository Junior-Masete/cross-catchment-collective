import React from 'react'
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/bannerphoto.png";
import pattern from "../assets/home_banner6.png"; // Optional

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

            <p className="mt-6 max-w-xl text-xl text-[#2E613F] md:text-[#2E613F] leading-tight mx-auto lg:mx-0">
              Restoring water, land and biodiversity through collaboration,
              science and community action.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button onClick={() => navigate("/about-us")} className="px-8 py-3 rounded-md bg-[#22613C] text-white font-medium hover:bg-[#18492c] transition">
              
                About Us
              </button>

              <button onClick={() => navigate("/contact")} className="px-8 py-3  bg-[#fff] rounded-md text-[#22613C] border border-color-[#2E613F] font-medium hover:bg-[#22613C] hover:text-white hover:border-white transition">
                Get in Touch
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;