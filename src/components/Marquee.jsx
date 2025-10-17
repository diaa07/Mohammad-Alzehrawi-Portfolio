import "./Marquee.css";
import React, { useEffect, useState } from "react";

export default function Marquee() {
  const [skillIcons, setSkillIcons] = useState([]);
  useEffect(() => {
    const imageModules = import.meta.glob(
      "../assets/skills/*.{png,jpg,jpeg,svg}",
      { eager: true }
    );
    const loadedIcons = Object.values(imageModules).map(
      (module) => module.default || module
    );
    setSkillIcons(loadedIcons);
  }, []);
  const duplicatedIcons = [...skillIcons, ...skillIcons, ...skillIcons];
  if (skillIcons.length === 0) {
    return null;
  }
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {duplicatedIcons.map((iconSrc, index) => (
          <img
            key={`${index}-${iconSrc}`}
            src={iconSrc}
            alt={`Skill Icon ${index}`}
            className="marquee-item"
          />
        ))}
      </div>
    </div>
  );
}
