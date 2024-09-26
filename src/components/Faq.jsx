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
            <AccordionItem value="item-4">
              <AccordionTrigger>
              Important Notice Regarding Scamming and Our Commitment to Professionalism
              </AccordionTrigger>
              <AccordionContent>
              We wish to address an ongoing issue concerning fraudulent activities that have been affecting our industry. Unfortunately, scams and misleading practices have become a significant concern. We want to reassure our clients and partners that our company is fully committed to maintaining the highest standards of professionalism and integrity.
Our organization adheres to all legal and regulatory requirements, and we ensure that all our paperwork and certifications are up-to-date. This includes our <strong>ETA papers,</strong> which confirm our status as registered <strong>taxpayers,</strong> demonstrating our commitment to compliance with government regulations.
We take these matters very seriously and are continually working to protect our clients from fraudulent activities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
              Disclaimers
              </AccordionTrigger>
              <AccordionContent>
All payments for our services must be made through our official company account, which is linked to our website.
 We will never request payments via PayPal, personal accounts, or any other method.
  We are not responsible for any payments made through unauthorized channels. 
  Any suspicious activity or unauthorized payment requests will be taken seriously, and we will pursue legal action under the U.S. Fraud and False Statements Act, 18 U.S. Code § 1001.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
             How much does it cost
              </AccordionTrigger>
              <AccordionContent>
              The standard charge 5%,however,all our fees are capped  Please Contact an onboarding specialist for details
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
             Does De helps with Invoicing and How Do I get paid?
              </AccordionTrigger>
              <AccordionContent>
Your invoicing and collection support is include in our services at NO additional cost.
since we provide original Rate cons,you will get paid directly from shippers and/or Brokers
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </Container>
  );
};

export default Faq;
