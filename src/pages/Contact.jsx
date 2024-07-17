import ContactForm from "@/components/ContactForm";
import States from "@/components/States";

import Container from "@/layouts/Container";
// import { Textarea } from "@/components/ui/textarea";

const Contactus = () => {
  return (
    <Container className="relative bg-blue-gray-50 py-12">
      <div className=" mx-auto px-4 lg:px-0 ">
        <div className=" flex flex-col justify-center items-center gap-8">
          <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
            Get In Touch
          </h1>
        </div>

        <ContactForm />

        <States />
      </div>
    </Container>
  );
};

export default Contactus;
