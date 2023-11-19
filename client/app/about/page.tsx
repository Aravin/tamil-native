import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Tamil Native",
  description: "About Page for Tamil Native - A service to send native products to anyone around the globe, based on their request & customization",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="About Page for Tamil Native - A service to send native products to anyone around the globe, based on their request & customization"
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
