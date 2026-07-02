import logo from "../assets/ccc_logo.png";
import lewis from "../assets/lewis.png";

function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Supported by
          </h3>

          <img
            src={lewis}
            alt="The Lewis Foundation"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src={logo}
                alt="Cross-Catchment Collective"
                className="h-50 object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="text-left">
              <h4 className="mb-4 text-2xl font-semibold text-green-800">
                Menu
              </h4>

              <ul className="space-y-2 text-gray-800">
                <li>
                  <a
                    href="/"
                    className="transition hover:text-green-700"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/cross-catchment-collective/about-us"
                    className="transition hover:text-green-700"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/resource-hub"
                    className="transition hover:text-green-700"
                  >
                    Resource Hub
                  </a>
                </li>

                <li>
                  <a
                    href="/news"
                    className="transition hover:text-green-700"
                  >
                    News
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="transition hover:text-green-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left">
              <h4 className="mb-4 text-2xl font-semibold text-green-800">
                Get in touch
              </h4>

              <div className="space-y-3 text-gray-800">
                <a
                  href="mailto:CatchmentCollaboration@duct.org.za"
                  className="block hover:text-green-700"
                >
                  CatchmentCollaboration@duct.org.za
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;