"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/achievements", label: "Achievements" },
    { to: "/myNetwork", label: "My Network" },
    { to: "/knowledge", label: "Knowledge Sharing" },
  ];

  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]  ">
        <Image src="/assets/header-bg-color.png" width={0} height={0} alt="logo" className="w-full h-96 " />
      </div> */}
      <section className={`sticky py-2 top-0 z-50 bg-transparent transition-all duration-300 ${isScrolled ? "bg-white  bg-opacity-50 shadow-sm backdrop-blur-lg" : ""}`}>
        {/* Start */}
        <nav className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-sm">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.to} className="block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <Link href="/" className="text-3xl font-bold">
              Zaman | PMP<sup>®</sup>
            </Link>
          </div>

          {/* Center - Desktop Menu */}
          <div className={`navbar-center hidden lg:flex rounded-full transition-all duration-300 ${isScrolled ? "" : "shadow-sm"} `}>
            <div className="flex items-center justify-center w-full h-full rounded-full">
              <ul className="flex px-4 py-2 space-x-2">
                {navLinks.map((link, index) => (
                  <li key={index} className=" transition-all duration-300 cursor-pointer">
                    <Link href={link.to} className={`block px-4 py-1 rounded-3xl transition-colors duration-200 ${pathname === link.to ? "bg-slate-900 text-white font-semibold" : "hover:bg-gray-200"}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* End - CTA */}
          <div className="navbar-end">
            <Link href="/consultation" className="flex items-center font-semibold gap-2 border px-4 py-2 rounded-full hover:bg-gray-200 transition">
              Free Consultation <BsArrowUpRight />
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
