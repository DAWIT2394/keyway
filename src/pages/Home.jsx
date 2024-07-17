import About from "@/components/About";
import About2 from "@/components/About2";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import States from "@/components/States";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Faq />
      <Counter />
      <About2 />
      <OurServices />
      <ContactForm />
      <States />
    </>
  );
};

export default Home;
