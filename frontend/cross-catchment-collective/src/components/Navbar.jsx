import { useState } from 'react'
import "tailwindcss";
import { Menu, X } from "lucide-react";
import logo from "../assets/ccc_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Resource Hub", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Cross-Catchment Collective"
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-lg font-medium transition-colors duration-200 ${
                  index === 0
                    ? "text-[#2D6A4F]"
                    : "text-gray-800 hover:text-[#2D6A4F]"
                }`}
              >
                {link.name}

                {index === 0 && (
                  <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#2D6A4F]" />
                )}
              </a>
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-white border-t border-gray-100">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`block py-3 text-base font-medium ${
                index === 0
                  ? "text-[#2D6A4F]"
                  : "text-gray-700 hover:text-[#2D6A4F]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar