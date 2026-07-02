import { useState, useEffect } from 'react'
import "tailwindcss";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/ccc_logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Resource Hub", path: "/resource-hub" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center">
            <img
              src={logo}
              alt="Cross-Catchment Collective"
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                `relative text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#2D6A4F]"
                    : "text-gray-800 hover:text-[#2D6A4F]"
                }`
              }
              >

              {({isActive}) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#2D6A4F]" />
                  )}
                </>
              )}
                {/* {link.name}

                {index === 0 && (
                  <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#2D6A4F]" />
                )} */}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full z-50 w-full md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-white border-t border-gray-100">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive}) => `block py-3 text-base font-medium ${
                isActive
                  ? "text-[#2D6A4F]"
                  : "text-gray-700 hover:text-[#2D6A4F]"
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar