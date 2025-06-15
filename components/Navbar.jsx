"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, ScrollText, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Image src="/logos/logo1.png" alt="logo" width={100} height={100} />
      </div>

      <ul className="hidden md:flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <Menu /> : <X />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link href="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="/skills" onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="/work" onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/schairez/"
              target="_blank"
            >
              LinkedIn <Linkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sergioforwardslash"
              target="_blank"
            >
              Github <Github size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:sergio@artrid.net"
            >
              Email
              <Mail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://drive.google.com/file/d/1IoG2KLUbxvbMw6ZYY5LSwm-9B-cBCx-7/view?usp=drive_link"
            >
              Resume <ScrollText size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
