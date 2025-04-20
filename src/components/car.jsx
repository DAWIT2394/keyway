import React from "react";
import p1 from "../assets/power.png";
import p2 from "../assets/dry.png";
import p3 from "../assets/box.png";
const services = [
  {
    title: "Dry Van",
    description:
      "Gain access to thousands of dry van loads from hundreds of shippers in one call",
    imgSrc: p2, // Replace this with the actual icon URL
  },
  {
    title: "Reefer",
    description:
      "From consumables to pharmaceuticals, one place has both the experts and the loads",
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-transport-truck_23-2149166246.jpg?t=st=1724314728~exp=1724318328~hmac=b8c55b5db8bf756492658ca4e7bd06a5aaad7948738f2377a178df27742397aa&w=740",
  },
  {
    title: "Box Truck",
    description:
      "Our vast industry network includes hundreds of brokers and suppliers specializing in Box Trucks",
    imgSrc: p3,
  },
  {
    title: "Flat Bed",
    description:
      "Dispatch Experts moves hundreds of Hot Shot, Flatbed, and Step Deck carriers daily",
    imgSrc:
      "https://img.freepik.com/premium-photo/heavy-truck-with-lowboy-trailer-3d-rendering-white-background_1113051-697.jpg?w=826",
  },
  {
    title: "Step Deck",
    description:
      "Dispatch Experts moves hundreds of Hot Shot, Flatbed, and Step Deck carriers daily",
    imgSrc:
      "https://img.freepik.com/premium-photo/heavy-truck-with-flatbed-trailer-d-rendering-white-background_1113051-3126.jpg?w=826",
  },
  {
    title: "Power Only",
    description:
      "From load outs to tow aways, one place has both the experts and the loads",
    imgSrc: p1,
  },
];

const ServiceCard = ({ title, description, imgSrc }) => (
  <div className="max-w-xs p-6 bg-white dark:bg-secondary shadow-lg rounded-lg text-center">
    <img src={imgSrc} alt={title} className="mx-auto w-30 h-16 mb-4" />
    <h2 className="text-lg font-semibold mb-2 text-green-600">{title}</h2>
    <p className="text-gray-600 dark:text-white/80 mb-4">{description}</p>
    <a href="/form">
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        More
      </button>
    </a>
  </div>
);

function Carp() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-secondary/30 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
          What We Move
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carp;
