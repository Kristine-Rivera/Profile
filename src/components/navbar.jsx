"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import "./style.css";

const links = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/portfolio", text: "Portfolio" },
  { url: "/contact", text: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.text}
            className="text-sm text-black mx-5"
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden w-1 h-1"></div>
      <div className="anim flex items-center justify-center">
        <span class="mirror anim-text-mirror text-2xl logo-text">ristine</span>
        <Link href="/" className="anim-btn">
          <Image
            className="origin-center -rotate-90 hover:rotate-0 transition duration-500 ease-in-out cursor-pointer"
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        <span class="anim-text text-2xl logo-text">ivera</span>
      </div>

      {/* ICONS */}
      <div className="hidden md:flex gap-4">
        <Link
          href="https://github.com/tineriver"
          className=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/tineriver/"
          className=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          classname="w-7 h-8 flex flex-col justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="z-50 relative w-7 h-1 m-1 bg-white rounded"></div>
          <div className="z-50 relative w-7 h-1 m-1 bg-white rounded"></div>
          <div className="z-50 relative w-7 h-1 m-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl">
            {links.map((link) => (
              <Link href={link.url} key={link.text}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
