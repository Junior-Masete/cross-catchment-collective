import uuwasp from "../assets/partner-logos/uwasp.png";
import abi from "../assets/partner-logos/ueip.png";
import umkhomazi from "../assets/partner-logos/ndc.png";
import rivers from "../assets/partner-logos/rol.png";
import ueip from "../assets/partner-logos/ucp.png";
import wrc from "../assets/partner-logos/ucwg.png";
import umzimvubu from "../assets/partner-logos/uwasp.png";
import sanbi from "../assets/partner-logos/sanbi.png";

const partners = [
  uuwasp,
  abi,
  umkhomazi,
  rivers,
  ueip,
  wrc,
  umzimvubu,
  sanbi,
];

function Partners() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#1E1E1E] mb-14">
          Our Partners
        </h2>

        {/* Fade Effect */}
        <div className="relative">

          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling Logos */}
          <div className="flex marquee">

            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-10 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 rounded-md bg-[#215D38] text-white hover:bg-[#18492c] transition">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
}

export default Partners;