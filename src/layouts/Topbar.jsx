import Container from "./Container";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Pin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-wrap justify-between py-2 text-xs md:text-sm">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <div className="flex justify-center items-center mr-2">
              <Phone size={16} className="text-primary" />
            </div>
            <div>+1 (302) 204-8440</div>
          </div>

          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <div className="flex justify-center items-center mr-2">
              <Mail size={16} className="text-primary" />
            </div>
            <div>info@exact-dispatcher.com</div>
          </div>

          <div className="flex items-center">
            <div className="flex justify-center items-center mr-2">
              <Pin size={16} className="text-primary" />
            </div>
            <div>
              561, 1007 N Orange St. 4th Floor, Wilmington, DE, New Castle, US,
              19801
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
