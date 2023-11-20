import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import TransportTypes from "@/components/TransportTypes";
// import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamil Native | Home",
  description: "Tamil Native - A courier & freight(cargo) service to send native products to anyone around the globe, based on their request & customization",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Locations/>
      <Features />
      <Brands />
      <AboutSectionOne />
      <TransportTypes/>
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
