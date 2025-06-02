import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

import { useCallback, useEffect, useState } from "react";
import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import AccountMenu from "@/components/AccountMenu";

// Scrolling Transparency Effect on Navigation Bar
const TOP_OFFSET = 66;

// Navigation Bar
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((prevShowAccountMenu) => !prevShowAccountMenu);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground
            ? "bg-black bg-opacity-100"
            : "bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Netflix Logo" />
        {/* Navigation for Streaming */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
