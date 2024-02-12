"use client";
import { useState } from "react";

const Tabs = ({ setMapCenter }) => {
  const [selected, setSelected] = useState(0);

  // Define an array of tab titles
  const tabTitles = [
    {
      title: "Gauteng",
      coordinates: { latitude: -32.2968, longitude: 26.4194 },
    },
    {
      title: "Free State",
      coordinates: { latitude: -28.4541, longitude: 26.866 },
    },
    {
      title: "Eastern Cape",
      coordinates: { latitude: -26.2041, longitude: 28.0473 },
    },
    {
      title: "KwaZulu-Natal",
      coordinates: { latitude: -29.603, longitude: 30.3659 },
    },
    {
      title: "Limpopo",
      coordinates: { latitude: -23.4015, longitude: 29.4179 },
    },
    {
      title: "Mpumalanga",
      coordinates: { latitude: -25.5653, longitude: 30.5279 },
    },
    {
      title: "Northern Cape",
      coordinates: { latitude: -28.0714, longitude: 24.817 },
    },
    {
      title: "North West",
      coordinates: { latitude: -25.6709, longitude: 25.482 },
    },
    {
      title: "Western Cape",
      coordinates: { latitude: -33.2278, longitude: 21.8569 },
    },
  ];

  const handleTabClick = (index) => {
    setSelected(index);
    setMapCenter(tabTitles[index].coordinates);
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex h-9 w-full mx-auto items-center px-2 justify-center rounded bg-white dark:bg-gray-600"
      tabIndex="0"
      data-orientation="horizontal"
      style={{ outline: "none" }}
    >
      {/* Map through the tabTitles array */}
      {tabTitles.map((title, index) => (
        <button
          key={index} // Ensure each button has a unique key
          className={`inline-flex items-center justify-center rounded whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
            selected === index
              ? "bg-roseRed text-white dark:bg-gray-900 shadow"
              : ""
          }`}
          // onClick={() => setSelected(index)} // Update selected state on click
          onClick={() => handleTabClick(index)}
        >
          {title?.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
