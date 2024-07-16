import Container from "@/layouts/Container";
import aboutimg from "../assets/slider8.jpg";

import { CircleCheck } from "lucide-react";

const About = () => {
  return (
    <Container>
      <div className="p-0 md:p-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        <div className=" flex flex-col mx-4">
          <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
            About Us
          </h1>

          <h2 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-xl">
            Truck Dispatch Services:
          </h2>

          <p>
            Keyway-dispatch LLC is a “Full Service” truck dispatching company
            that handles all of the back-office work so you can compete with the
            large fleets. Typically, a large carrier would hire somebody to
            handle all of these tasks, but it is unaffordable for a small
            carrier, that’s where Exact dispatcher LLC comes in to help!
          </p>
          <div className=" mt-4 flex flex-col gap-1">
            <p className=" flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} /> Best Truck Dispatch
              Company On Your Side
            </p>
            <p className=" flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              You Pick The Areas You Want To Drive
            </p>
            <p className=" flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Handle All Your Broker Setup Packets
            </p>
            <p className=" flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Negotiate Hard For Best Paying Rates
            </p>
            <p className=" flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Talk To Brokers
            </p>
          </div>
        </div>
        <div>
          <img src={aboutimg} alt="" className="rounded-2xl" />
        </div>
      </div>
    </Container>
  );
};

export default About;
