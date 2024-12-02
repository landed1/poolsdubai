import React from "react";

// TypeScript object containing the titles and links
const serviceLinks = [
  { title: "Pool Maintenance", link: "/services/pool-maintenance" },
  {
    title: "Pool Design & Construction",
    link: "/services/pool-design-construction",
  },
  { title: "Water Testing", link: "/services/water-testing" },
  { title: "Chemical Balancing", link: "/services/chemical-balancing" },
  { title: "Equipment Repair", link: "/services/equipment-repair" },
  { title: "Pool Renovation", link: "/services/pool-renovation" },
];

const ServiceList: React.FC = () => {
  return (
    <div className='container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {serviceLinks.map((service, index) => (
        <div
          key={index}
          className='p-6 bg-[#f7f6f0] text-black rounded-tl-md rounded-br-md shadow-lg'>
          <a href={service.link} className='hover:text-[#0fa0ba]'>
            {service.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
