import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  const ServiceLists = [
    {
      id: 1,
      name: "27/7 Customer Service",
      description:
        "You can call us or visit us anytime, we're always available.",
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
      id: 2,
      name: "100% Moneyback Guanrantee",
      description: "You can always return your purchased item within a week.",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      id: 3,
      name: "Swap Deals",
      description: "Instantly swap your phone for an upgraded version.",
      icon: <FontAwesomeIcon icon={faArrowsSpin} />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 lg:flex-row" id="services">
      {ServiceLists.map((service) => {
        return (
          <div className="bg-light p-4 rounded-sm flex flex-col items-center gap-3 text-center transition duration-300 hover:shadow-2xl" key={service.id} data-aos="fade-right">
            <span className="text-3xl">{service.icon}</span>
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-grey">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
