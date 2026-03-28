import { faAudible, faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faGamepad, faLaptop, faMobile, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons/faMobileAndroid";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductsCat = () => {
  const CategoryLists = [
    {
      id: 1,
      name: "Smartphones",
      img: <FontAwesomeIcon icon={faMobileAndroid} />,
    },
    {
      id: 2,
      name: "Laptops",
      img: <FontAwesomeIcon icon={faLaptop} />,
    },
    {
      id: 3,
      name: "Game Consoles",
      img: <FontAwesomeIcon icon={faGamepad} />,
    },
    {
      id: 4,
      name: "Desktop",
      img: <FontAwesomeIcon icon={faDesktop} />,
    },
    {
      id: 5,
      name: "Smart Watch",
      img: <FontAwesomeIcon icon={faWatchmanMonitoring} />,
    },
    {
      id: 1,
      name: "Accessories & More",
      img: <FontAwesomeIcon icon={faAudible} />,
    },
  ];
  return (
    <div>
        <div className="flex flex-col gap-2 text-center mb-12">
            <h1 className="text-3xl font-bold">Our Categories</h1>
            <p className="text-grey">Check out our full product collections from store</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {CategoryLists.map((service) => {
        return (
          <div
            className="flex flex-col items-center gap-3 text-center"
            key={service.id}
            data-aos="fade-right"
          >
            <span className="text-[50px] bg-light rounded-full p-10 transition duration-400 hover:shadow-xl">{service.img}</span>
            <h2 className="text-2xl font-medium">{service.name}</h2>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ProductsCat;
