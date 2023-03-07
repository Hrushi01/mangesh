import React from "react";
import Logo from "../assets/logo.svg";

function Header({ setDisplay }) {
  return (
    <div>
      <header className="bg-white shadow">
        <nav className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <img src={Logo} alt="Green House Detection" className="h-8" />
              <div className="  font-bold text-2xl text-green-600 ">
                Go Green
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center">
                <li>
                  <button
                    onClick={() => {
                      setDisplay("home");
                    }}
                    className="text-gray-700 hover:text-green-500"
                  >
                    Home
                  </button>
                </li>
                <li className="ml-6">
                  <button
                    onClick={() => {
                      setDisplay("about");
                    }}
                    className="text-gray-700 hover:text-green-500"
                  >
                    About Us
                  </button>
                </li>
                <li className="ml-6">
                  <button
                    onClick={() => {
                      setDisplay("contact");
                    }}
                    className="text-gray-700 hover:text-green-500"
                  >
                    Contact Us
                  </button>
                </li>
                <li className="ml-6">
                  <button
                    onClick={() => {
                      setDisplay("valu");
                    }}
                    className="text-gray-700 hover:text-green-500"
                  >
                    Check Values Live
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="block text-gray-700 hover:text-green-500 focus:text-green-500 focus:outline-none">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm18 6H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0 6H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
