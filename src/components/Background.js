import {useEffect, useState, useRef } from "react";
import "../assets/css/Background.css";

import banner1 from "../assets/imgs/banner1.png";
import banner2 from "../assets/imgs/banner2.png";
import banner3 from "../assets/imgs/banner3.png";
import banner4 from "../assets/imgs/banner4.png";

import mob_banner1 from "../assets/imgs/itens/banner_mobile/banner1.png";
import mob_banner2 from "../assets/imgs/itens/banner_mobile/banner2.png";
import mob_banner3 from "../assets/imgs/itens/banner_mobile/banner3.png";
import mob_banner4 from "../assets/imgs/itens/banner_mobile/banner4.png";

const normal_images = [banner1,banner2,banner3,banner4]
const mob_images = [mob_banner1,mob_banner2,mob_banner3,mob_banner4]



const colors=[
  "bg-gradient-to-b from-fuchsia-600 via-fuchsia-500 to-white",
  "bg-gradient-to-b from-yellow-400 via-yellow-300 to-white",
  "bg-gradient-to-b from-[#aa003f] via-pink-600 to-white",
  "bg-gradient-to-b from-orange-300 via-orange-20 to-white",
]


export default function Background(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

  useEffect(() => {
      function handleResize() {
      setIsMobile(window.innerWidth <= 767)
      }

      window.addEventListener('resize', handleResize)

      return () => {
      window.removeEventListener('resize', handleResize)
      }
  }, [])    

  let intervalo= props.time ?? 8000
  const [idxColor, setColor] = useState(0)
  const [idxImg, setImg] = useState(0)
  const prevBgStateRef = useRef({ colorIndex: 0, imgIndex: 0 })

  const handleNext = () => {
    setImg((idxImg + 1) % (isMobile ? mob_images.length : normal_images.length))
    setColor((idxColor + 1) % colors.length)
  }

  const handlePrev = () => {
    setImg((idxImg - 1 + (isMobile ? mob_images.length : normal_images.length)) % (isMobile ? mob_images.length : normal_images.length))
    setColor((idxColor - 1 + colors.length) % colors.length)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImg((idxImg + 1) % (isMobile ? mob_images.length : normal_images.length))
      setColor((idxColor + 1) % colors.length)
    }, intervalo)

    const prevBgState = prevBgStateRef.current
    const bgState = { colorIndex: idxColor, imgIndex: idxImg }
    if (prevBgState.colorIndex !== bgState.colorIndex && prevBgState.imgIndex !== bgState.imgIndex) {
    }

    prevBgStateRef.current = bgState
    return () => clearTimeout(timeout)
  }, [idxColor, idxImg, intervalo, isMobile])

    return (
        <div className={`relative flex flex-col w-full h-screen ${colors[idxColor]}`}>{props.children}
          
          <img className="absolute" src={(isMobile ? mob_images[idxImg] : normal_images[idxImg])} alt={`imgfile${idxImg}`}/>
          
          <button onClick={handlePrev}>
          <svg id="chevron-left" viewBox="0 0 467 512.43" className="absolute top-12 w-8 left-1 md:left-10 fill-slate-700/30 md:fill-slate-700 md:hover:fill-black/30 py-14">
            <path d="M263.78 18.9c4.28-4.3 4.3-11.31.04-15.64a10.865 10.865 0 0 0-15.48-.04L3.22 248.38c-4.28 4.3-4.3 11.31-.04 15.64l245.16 245.2c4.28 4.3 11.22 4.28 15.48-.05s4.24-11.33-.04-15.63L26.5 256.22 263.78 18.9z"/></svg>
          </button>

          <button onClick={handleNext}>
          <svg id="chevron-right" viewBox="0 0 467 512.43" className="absolute top-12 w-8 right-1 md:right-10 fill-slate-700/30 md:fill-slate-700 hover:fill-black/30 py-14">
          <path d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 
          4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 
          3.22 18.9z"/></svg>            
          </button>

        </div>
    )
}