import React, { useState,  useLayoutEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {


  const [navOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // Using useLayoutEffect for immediate layout effect
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      closeNavOnResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect once after the initial render

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeNavOnResize = () => {
    setNavOpen(false);
  };

  const handleCreateAccount = () => {
    const message = encodeURIComponent("Hello Nilote, I want to create an account.");
    window.open(`https://api.whatsapp.com/send?phone=+254729992516&text=${message}`, '_blank');
  };

  return (
    <div className="bg-black p-4  pb-8">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto relative">
        <h1 className="text-3xl font-bold text-white">.NG.</h1>

        {windowWidth <= 768 && (
          <div onClick={handleNavToggle} className="cursor-pointer">
            {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        )}

        {windowWidth > 768 && (
          <li className="flex-row hidden md:flex space-x-4">
            <button>
              <Link to="/Hero" className="link-style text-white">
              Home
              </Link>
            </button>
            <button className="p-4 text-white" onClick={handleCreateAccount}>
               create account
            </button>
          </li>
        )}

        {windowWidth <= 768 && navOpen && (
          <div
            className={`absolute top-full right-0 w-48 overflow-hidden bg-black border-l border-t border-r border-gray-600 rounded-l-lg transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col items-end">
              <li className="p-4 text-white">
                <Link to="/Hero">Home</Link>
              </li>
              <li className="p-4 text-white" onClick={handleCreateAccount}>
                Create Account
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
