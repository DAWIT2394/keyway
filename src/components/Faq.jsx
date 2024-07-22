import Container from "@/layouts/Container";
import faqimg from "../assets/faq.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Faq = () => {
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
      <div
        ref={ref}
        className="p-0 md:p-8 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 "
      >
        <div className=" md:pr-24">
          <motion.img
            src={faqimg}
            alt=""
            className="rounded-2xl "
            variants={imageContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        </div>

        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className=" flex flex-col mx-4  h-full"
        >
          <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
            Frequently Asked Questions
          </h1>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What will dispatcher services do for my business?
              </AccordionTrigger>
              <AccordionContent>
                Very simply, we buy you time so you can make more money. Most
                owners/operators get into this business to drive loads and make
                money, then find themselves bogged down by all the paperwork,
                regulatory requirements, and negotiations — things that keep you
                from doing what actually makes you money. By taking on all the
                business support activities you would like to offload, logistics
                dispatcher allows your business to run efficiently — and for you
                to take on more loads. In addition, when it comes to
                negotiating, we aim to get you the best rates for your loads, so
                you get to put more money in your pocket.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How much do dispatcher services cost?
              </AccordionTrigger>
              <AccordionContent>
                Our pricing model is based on a percentage of the load value,
                ensuring that you only pay when you earn. This aligns our
                incentives with yours, allowing us to focus on getting you the
                best possible rates and ensuring that your loads are managed
                efficiently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What are the benefits of using a dispatcher?
              </AccordionTrigger>
              <AccordionContent>
                Using a dispatcher allows you to focus on driving and earning
                more money, while we handle the administrative and logistical
                tasks. This includes negotiating rates, handling paperwork, and
                ensuring compliance with regulations. Our goal is to maximize
                your efficiency and profitability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </Container>
  );
};

export default Faq;
