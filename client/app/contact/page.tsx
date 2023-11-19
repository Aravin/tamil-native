import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page | Tamil Native',
  description: 'Contact page for Tamil Native - A service to send native products to anyone around the globe, based on their request & customization',
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have a question, suggestion, or feedback? We're always happy to hear from you. Reach out to us using the contact form below or by using one of the methods provided. We'll get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
