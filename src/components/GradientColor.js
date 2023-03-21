import React, { useState, useEffect } from "react";
import $ from "jquery";

const cores = [
  "bg-gradient-to-b from-fuchsia-600 via-fuchsia-50 to-white",
  "bg-gradient-to-b from-yellow-400 via-yellow-50 to-white",
  "bg-gradient-to-b from-[#aa003f] via-pink-200 to-white",
  "bg-gradient-to-b from-orange-300 via-orange-50 to-white",
];

const Gradiente = ({ intervalo = 8000, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % cores.length);
    }, intervalo);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, intervalo]);

  useEffect(() => {
    $("#gradiente").fadeIn(600);
  }, [currentIndex]);

  return (
    <div id="gradiente" className={cores[currentIndex]}>
      {children}
    </div>
  );
};

export default Gradiente;
