import { useState, useEffect } from "react";
import MusicPlayer from "../components/MusicPlayer";

export default function Navbar() {
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
        {/* Overlay gelap saat navbar dibuka pointer-events-none = mencegah interaksi dengan elemen lain */}
        <div
          className={`fixed z-40 lg:hidden inset-0 transition-all bg-black/60 duration-300 ease-in ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${
              isScrolled
                ? "backdrop-blur-md bg-white/70 shadow-lg"
                : "bg-white/20 backdrop-blur-sm"
            }`}
        >
          <div className="container px-4 lg:px-12 max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Logo dengan animasi dan efek hover */}
              <div className="px-4 py-2">
                <a
                  href="#home"
                  className="font-bold text-lg block py-2 xl:text-xl 2xl:text-2xl 
                     text-[#6497B1]   
                    hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Nas
                </a>
              </div>

              {/* Perbaikan posisi hamburger menu */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" top-0 px-4 py-2 block fixed right-4 lg:hidden 
                    hover:scale-105 transition-all duration-300 ease-in-out
                     rounded-lg hover:bg-gray-100/50
                    z-[60] "
                >
                  <div
                    className={`w-[30px] h-[2px] my-2 block bg-[#6497B1] transition-all duration-300 ease-in-out origin-top-left
                      ${isOpen ? "rotate-45 " : ""}`}
                  ></div>
                  <div
                    className={`w-[30px] h-[2px] my-2 block bg-[#6497B1] transition-all duration-300 ease-in-out
                      ${isOpen ? "opacity-0" : "opacity-100"}`}
                  ></div>
                  <div
                    className={`w-[30px] h-[2px] my-2 block bg-[#6497B1] transition-all duration-300 ease-in-out origin-bottom-left
                      ${isOpen ? "-rotate-45 " : ""}`}
                  ></div>
                </button>

                <div>
                  {/* Navigation Menu dengan z-index yang lebih rendah */}
                  <div
                    className={`fixed lg:static top-0 right-0 h-screen lg:h-auto
                    backdrop-blur-xl lg:backdrop-blur-none bg-white lg:bg-transparent
                  lg:w-auto transition-all duration-500 ease-in-out w-[40vw] min-w-[270px]
                    p-4 lg:p-0 pt-14 lg:pt-0
                    shadow-2xl drop-shadow-xl lg:shadow-none
                    z-55
                    ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
                    lg:flex lg:items-center`}
                  >
                    <ul className=" flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8 ">
                      {[
                        { href: "#home", text: "Home" },
                        { href: "#sertification", text: "Sertification" },
                        { href: "#techStack", text: "Tech Stack" },
                        { href: "#experience", text: "Experience" },
                        { href: "#portfolio", text: "Portfolio" },
                        { href: "#contact", text: "Contact" },
                      ].map((item) => (
                        <li key={item.href} className="group">
                          <a
                            href={item.href}
                            className="  text-lg lg:text-xl text-gray-700 
                            relative overflow-hidden block
                            hover:text-[#6497B1] t duration-300
                            py-2 px-4 rounded-lg hover:bg-blue-50/50
                            group-hover:scale-105 transform transition-all"
                          >
                            {item.text}
                            <span
                              className="absolute bottom-0 left-0 w-full h-0.5 
                            bg-[#6497B1] transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-300"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* Music Player dengan styling baru */}
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                      <MusicPlayer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
