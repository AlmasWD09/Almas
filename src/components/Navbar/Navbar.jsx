import { useState } from "react";
import Container from "../Shared/Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=" bg-white shadow dark:bg-gray-800 py-4">
        <Container>
          <div className=" lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold font-lato">Almas</h1>
  
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
  
                  <svg
                    className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
  
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a href="#" className="px-3 py-2 mx-3 text-gray-700 hover:underline underline-offset-8 hover:text-red-400 font-lato">
                  Home
                </a>
                <a href="#" className="px-3 py-2 mx-3 text-gray-700 hover:underline underline-offset-8 hover:text-red-400 font-lato">
                  About
                </a>
                <a href="#" className="px-3 py-2 mx-3 text-gray-700 hover:underline underline-offset-8 hover:text-red-400 font-lato">
                  Blogs
                </a>
                <a href="#" className="px-3 py-2 mx-3 text-gray-700 hover:underline underline-offset-8 hover:text-red-400 font-lato">
                  Protfolio
                </a>
              </div>
              <div className="flex">
              <button className="btn bg-green-400 text-white px-2 py-1">Contact</button>
            </div>
            </div>
          </div>
     
        </Container>
      </nav>
    );
};

export default Navbar;