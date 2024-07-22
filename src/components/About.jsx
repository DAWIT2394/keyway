import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/layouts/Container";
import aboutimg from "../assets/about1.png";
import { CircleCheck } from "lucide-react";

const About = () => {
  const textContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Container>
      <motion.div
        ref={ref}
        className="p-0 md:p-8 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex flex-col mx-4"
          variants={textContainerVariants}
        >
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
            carrier, that’s where Keyway-dispatcher LLC comes in to help!
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <p className="flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} /> Best Truck Dispatch
              Company On Your Side
            </p>
            <p className="flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              You Pick The Areas You Want To Drive
            </p>
            <p className="flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Handle All Your Broker Setup Packets
            </p>
            <p className="flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Negotiate Hard For Best Paying Rates
            </p>
            <p className="flex gap-2 items-center">
              <CircleCheck fill color="white" size={18} />
              We Talk To Brokers
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={imageContainerVariants}
          className="flex justify-center items-center"
        >
          <img src={aboutimg} alt="" className="rounded-2xl shadow-md " />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
