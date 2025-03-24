import { useState, useEffect } from "react";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>
            <div>
            <header
      className={`fixed top-0 left-0 w-full z-50 transition-all  ${
        isScrolled ? "backdrop-blur-xl  shadow-lg" : "bg-transparen"
      }`}
    >
      <div className="container px-4 lg:px-10 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-blue-400 block py-6 xl:text-xl 2xl:-translate-x-36 2xl:text-2xl">
              Nas
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="flex justify-center">
            <button
              onClick={() => {setIsOpen(!isOpen)}}
              className="block absolute right-4 top-4 lg:hidden "
            > 
              <div className={`w-[30px] h-[2px] my-2 block bg-black transition-transform duration-300 origin-top-left ${isOpen ? "rotate-45  " : ""}`}></div>
              <div className={`w-[30px] h-[2px] my-2 block bg-black  transition ease-in-out ${isOpen ? "scale-0" : ""}`}></div>
              <div className={`w-[30px] h-[2px] my-2 block bg-black transition-transform duration-300 origin-bottom-left ${isOpen ? "-rotate-45  " : ""}`}></div>
            </button>

            {/* Navigation Menu */}
            <nav
              className={`absolute transition ease-in-out bg-white duration-500 py-5 lg:bg-transparent shadow-xl rounded-lg max-w-[250px] w-full right-0 top-full lg:block lg:static lg:ml-30  lg:max-w-full lg:shadow-none lg:rounded-none lg:pr-0 2xl:translate-x-36
              ${isOpen ? "opacity-0 lg:opacity-100 translate-x-0" : "opacity-100 translate-x-[-30px] "}`}
            >
              <ul className="block  lg:flex lg:space-x-8 lg:pl-0 text-3xl">
                <li className="group">
                  <a href="#home" className="text-xl text-black py-2 mx-4 flex group-hover:text-blue-400 2xl:text-xl">
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a href="#education" className="text-xl text-black py-2 mx-4 flex group-hover:text-blue-400 2xl:text-xl">
                    Pendidikan
                  </a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-xl text-black py-2 mx-4 flex group-hover:text-blue-400 2xl:text-xl">
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a href="#skills" className="text-xl text-black py-2 mx-4 flex group-hover:text-blue-400 2xl:text-xl">
                    Tech Stack
                  </a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-xl text-black py-2 mx-4 flex group-hover:text-blue-400 2xl:text-xl">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
            </div>
        </>
    )
}