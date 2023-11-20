import Locations from "@/components/Locations";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Service Locations | Tamil Native",
  description: "Our service locations for Tamil Native - A service to send native products to anyone around the globe, based on their request & customization",
  // other metadata
};

const LocationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Service Locations"
        description="We connect from TamilNadu to all over the globe"
      />
      <Locations />
    </>
  );
};

export default LocationsPage;
