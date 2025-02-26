import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "professional experience"
    },
    {
      id: 3,
      link: "my projects"
    },
    {
      id: 4,
      link: "skills"
    },
    {
      id: 5,
      link: "contact"
    }
  ]

  return (
    <div className="flex justify-between  items-center w-full h-20  px-4 text-white navbarColor fixed">
      <div>
        <h1 className="text-5xl font-signature m-2 text-gray-200 cursor-pointer">Mr. RS.</h1>
      </div>

      <ul className=" md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  text-white hover:scale-105 hover:text-blue-300 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  pr-4 z-10 text-gray-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full h-92 bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer hover:text-purple-400 hover:bg-slate-900 capitalize py-4 text-2xl   "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Navbar;