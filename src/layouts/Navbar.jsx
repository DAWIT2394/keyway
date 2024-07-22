import Theme from "@/components/Theme";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [state, setState] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  const toggleMenu = () => {
    setState(!state);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setState(false);
    }
  };

  useEffect(() => {
    if (state) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state]);

  const menus = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/aboutus" },
    { title: "Services", path: "/services" },
  ];

  return (
    <nav
      ref={navRef}
      className="bg-[#F0F8FF] dark:bg-black w-full sticky top-0 z-50"
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a
            href="/"
            className="flex justify-center items-center gap-2 text-3xl"
          >
            <img src="src\assets\logo.png" alt="Logo" />
          </a>
          <div className="md:hidden my-4">
            <button
              className="text-gray-700 outline-none p-2 rounded-md "
              onClick={toggleMenu}
            >
              {state ? (
                <X className="text-black dark:text-white" size={36} />
              ) : (
                <Menu className="text-black dark:text-white" size={36} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 pb-12 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 lg:space-x-12 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-white">
                <a
                  href={item.path}
                  className={
                    location.pathname === item.path
                      ? "text-primary "
                      : "text-gray-600 dark:text-gray-300"
                  }
                >
                  {item.title}
                </a>
              </li>
            ))}

            <Link to="/contact">
              <Button href="/contact" className="mt-6 md:mt-0">
                Get In Touch
              </Button>
            </Link>

            <div>
              <Theme />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
