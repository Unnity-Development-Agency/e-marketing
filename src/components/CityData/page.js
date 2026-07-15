"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import cityData from "@/data/cityData.json";
import "./citydata.css";

export default function CityData({ activeCity }) {
  const [selectedCity, setSelectedCity] = useState(cityData[0]);

  useEffect(() => {
    if (!activeCity) return;

    const matched = cityData.find(
      (c) =>
        c.title.toLowerCase() === activeCity.toLowerCase() ||
        c.city?.toLowerCase() === activeCity.toLowerCase() ||
        c.slug?.toLowerCase() === activeCity.toLowerCase().replaceAll(" ", "-")
    );

    if (matched) {
      setSelectedCity(matched);
    }
  }, [activeCity]);

  return (
    <section className="why-city-section">
      <div className="why-city-card">
        {/* LEFT */}
        <div className="why-city-left">
          <span className="city-badge">{selectedCity.badge}</span>

          <h2 className="city-heading">Why {selectedCity.title}?</h2>

          <p className="city-description">{selectedCity.description}</p>

          <button className="city-btn">Book A Discovery Call</button>
        </div>

        {/* RIGHT */}
        <div className="why-city-right">
          <Image
            src={selectedCity.image}
            alt={selectedCity.title}
            fill
            priority
            className="city-image"
          />
        </div>
      </div>

      {/* CITY LIST */}
      {/* <div className="city-tabs">
        {cityData.map((city) => (
          <button
            key={city.slug}
            onClick={() => setSelectedCity(city)}
            className={`city-tab ${
              selectedCity.slug === city.slug ? "active" : ""
            }`}
          >
            {city.city}
          </button>
        ))}
      </div> */}
    </section>
  );
}