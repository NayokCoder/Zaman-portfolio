import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/cirtification", label: "Certification" }, // consider fixing the spelling here
    { to: "/training", label: "Training" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <div className="bg-gray-100">
      <section className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="text-5xl font-bold">
            Zaman | PMP <span className="text-5xl text-red-700 font-extrabold">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex rounded-full bg-white">
          <ul className="flex space-x-5 px-5 py-2">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:rounded-3xl hover:bg-gray-200 px-4 py-2 transition-all duration-300 cursor-pointer">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="navbar-end">
          <Link to="/consultation" className="flex items-center font-semibold gap-2 border px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Free Consultation <BsArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
