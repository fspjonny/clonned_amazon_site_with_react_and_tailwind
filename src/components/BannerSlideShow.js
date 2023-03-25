import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../assets/css/BannerSlideShow.css";

const BannerSlideshow = ({ images, direction = "left", intervalo = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, intervalo)

    return () => {
      clearTimeout(timeoutId)
    };
  }, [currentIndex, images.length, intervalo])

  useEffect(() => {
    $("#banner img").hide()
    $("#banner img").eq(currentIndex).fadeIn(600)
    $("#banner").eq(currentIndex).fadeIn(600)
  }, [currentIndex])

  return (
    <div className="relative" id="banner" style={{ overflow: "hidden" }}>
      <div className="hidden text-[2.8rem] absolute items-center left-5 md:flex md:h-60 md:w-10">
        <svg id="chevron-left" viewBox="0 0 467 512.43"><path d="M263.78 18.9c4.28-4.3 4.3-11.31.04-15.64a10.865 10.865 0 0 
        0-15.48-.04L3.22 248.38c-4.28 4.3-4.3 11.31-.04 15.64l245.16 245.2c4.28 4.3 11.22 4.28 
        15.48-.05s4.24-11.33-.04-15.63L26.5 256.22 263.78 18.9z"/></svg>
      </div>

      <div className="hidden text-[2.8rem] absolute right-5 items-center ml-5 md:flex md:h-60 md:w-10">
        <svg id="chevron-right" viewBox="0 0 467 512.43">
          <path d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 
          4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 
          3.22 18.9z"/></svg>
      </div>

      <div className="flex flex-row justify-center items-center object-contain">
      {images.map((image, index) => (
        <div key={index} style={{ float: direction }}>
          {image}
        </div>
      ))}
      </div>

    </div>
  )
}

export default BannerSlideshow;
