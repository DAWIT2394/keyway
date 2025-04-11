import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] pt-10 px-4 md:px-0 tracking-wordSpacing text-white">
      <Container>
        <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className=" flex flex-col ">
            <h3 className="text-xl font-bold mb-8 uppercase">Contact Us</h3>

            <div className=" flex flex-col gap-4 text-gray-500">
              <p>2443 Palmetto St, Oakland, California 94602, United States</p>

              <div
                className=" flex flex-col gap-2
              "
              >
                <a href="tel:+15106005530" className="text-primary">
                  {" "}
                  +1 (530) 240-0508
                </a>

                <a
                  href="mailto:info@keyway-dispatch.com"
                  className="text-primary"
                >
                  info@keyway-dispatch.com
                </a>
              </div>
            </div>
          </div>

          <hr className=" block sm:hidden" />

          {/* Column 2 */}
          <div className=" flex flex-col ">
            <h3 className="text-xl font-bold mb-8 uppercase">Services</h3>

            <div className=" flex flex-col gap-4 text-gray-500">
              <Link to="/" className="text-primary hover:underline">
                {" "}
                Home
              </Link>

              <Link to="/services" className="text-primary hover:underline">
                {" "}
                Trucking Dispatch Services
              </Link>
            </div>
          </div>

          <hr className=" block sm:hidden" />

          {/* Column 3 */}
          <div className=" flex flex-col ">
            <h3 className="text-xl font-bold mb-8 uppercase">Quick Links</h3>

            <div className=" flex flex-col gap-4 text-gray-500">
              <Link to="/" className="text-primary hover:underline">
                {" "}
                Home
              </Link>

              <Link to="/aboutus" className="text-primary hover:underline">
                {" "}
                About
              </Link>

              <Link to="/contact" className="text-primary hover:underline">
                {" "}
                Contact Us
              </Link>
            </div>
          </div>

          <hr className=" block sm:hidden" />

          {/* Column 4 */}
          <div className=" flex flex-col ">
            <h3 className="text-xl font-bold mb-8 uppercase">Social Media</h3>

            <div className=" flex  gap-4 text-gray-500">
              <Facebook className=" cursor-pointer hover:text-primary" />
              <Instagram className=" cursor-pointer hover:text-primary" />
              <Linkedin className=" cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-16 py-6 border-t border-gray-700 mx-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div>
                <p>© {currentYear} - Keyway. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
