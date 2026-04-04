import React from "react";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesArchAnimation from "../components/Services/ServicesArchAnimation";
import ServicesCTA from "../components/Services/ServicesCTA";

const Services: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000">
      <ServicesHero />
      <ServicesArchAnimation />
      <ServicesCTA />
    </div>
  );
};

export default Services;
