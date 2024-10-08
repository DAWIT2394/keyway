import ContactForm from "@/components/ContactForm";
import States from "@/components/States";

import Container from "@/layouts/Container";

const Contactus = () => {
  return (
    <Container className="relative bg-blue-gray-50 py-12">
      <ContactForm />
      <States />
    </Container>
  );
};

export default Contactus;
