import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import TransportTypes from "@/components/TransportTypes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Transport Types Page | Tamil Native',
  description: 'Transport Types page for Tamil Native - A service to send native products to anyone around the globe, based on their request & customization',
  // other metadata
};

const TransportTypesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Transport Types"
        description="Courier & Cargo(Freight)"
      />
      <TransportTypes />
    </>
  );
};

export default TransportTypesPage;
