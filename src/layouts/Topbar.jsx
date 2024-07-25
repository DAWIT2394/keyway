import Container from "./Container";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Pin } from "lucide-react";
import Marquee from "react-fast-marquee";

const Topbar = () => {
  return (
    <Marquee pauseOnHover speed={100}>
      <Container>
        <div className="flex flex-wrap justify-between  py-2 text-xs md:text-sm">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4  mx-12">
            <div className="flex justify-center items-center mr-2">
              <Phone size={16} className="text-primary" />
            </div>
            <a href="tel:+15106005530"> +1 (510) 600-5530 </a>
          </div>

          <div className="flex items-center mb-2 md:mb-0 md:mr-4 mx-12">
            <div className="flex justify-center items-center mr-2">
              <Mail size={16} className="text-primary" />
            </div>
            <a href="mailto:info@keyway-dispatch.com">
              info@keyway-dispatch.com
            </a>
          </div>

          <div className="flex items-center mx-12">
            <div className="flex justify-center items-center mr-2">
              <Pin size={16} className="text-primary" />
            </div>
            <div>
              2443 Palmetto St, Oakland, California 94602, United States
            </div>
          </div>
        </div>
      </Container>
    </Marquee>
  );
};

export default Topbar;
