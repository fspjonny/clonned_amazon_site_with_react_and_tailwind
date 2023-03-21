import React, {useState, useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../assets/css/SliderItens.css';

// Imagens que ficariam em um repo web
import item0 from "../assets/imgs/item0.png";
import item1 from "../assets/imgs/item1.png";
import item2 from "../assets/imgs/item2.png";
import item3 from "../assets/imgs/item3.png";
import item4 from "../assets/imgs/item4.png";
import item5 from "../assets/imgs/item5.png";
import item6 from "../assets/imgs/item6.png";
import item7 from "../assets/imgs/item7.png";
import item8 from "../assets/imgs/item8.png";
import item9 from "../assets/imgs/item9.png";
import item10 from "../assets/imgs/item10.png";
import item11 from "../assets/imgs/item11.png";
import item12 from "../assets/imgs/item12.png";
import item13 from "../assets/imgs/item13.png";
import item14 from "../assets/imgs/item14.png";
import item15 from "../assets/imgs/item15.png";
import item16 from "../assets/imgs/item16.png";
import item17 from "../assets/imgs/item17.png";
import item18 from "../assets/imgs/item18.png";
import item19 from "../assets/imgs/item19.png";
import item20 from "../assets/imgs/item20.png";
import item21 from "../assets/imgs/item21.png";
import item22 from "../assets/imgs/item22.png";
import item23 from "../assets/imgs/item23.png";
import item24 from "../assets/imgs/item24.png";

// API ou registro de tabela que disporia as imagens do repo web
const slideImages = [
  {img:item0, caption:"Até 60% off"},
  {img:item1, caption:"Calulares e Acessórios"},
  {img:item2, caption:"Dispositivos Amazon"},
  {img:item3, caption:"Computadores e Informática"},
  {img:item4, caption:"Livros e eBooks"},
  {img:item5, caption:"Eletrônicos e TVs"},
  {img:item6, caption:"Video Games"},
  {img:item7, caption:"Bebidas Alcólicas"},
  {img:item8, caption:"Casa"},
  {img:item9, caption:"Cozinha"},
  {img:item10, caption:"Moda"},
  {img:item11, caption:"Beleza"},
  {img:item12, caption:"Alimentos e Bebidas"},
  {img:item13, caption:"Itens para bebê"},
  {img:item14, caption:"Casa Inteligente"},
  {img:item15, caption:"Ferramentas e Construção"},
  {img:item16, caption:"Brinquedos e Jogos"},
  {img:item17, caption:"Papelaria e Escritório"},
  {img:item18, caption:"Pet Shop"},
  {img:item19, caption:"Esportes e Aventura"},
  {img:item20, caption:"Jardim e Piscina"},
  {img:item21, caption:"Automotivo"},
  {img:item22, caption:"Instrumentos Musicais"},
  {img:item23, caption:"CD e Vinil"},
  {img:item24, caption:"DVD & Blu-Ray"},
]

export default function SlideItens() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 740)

useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 740)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


    return (
    <div className="relative mx-5 mb-10 mt-5 md:p-5 grid grid-cols-1 grid-rows-1 bg-white">
      <div className='inline-flex'>
        <span className="text-[22px] font-bold">Semana do Consumidor</span>
        <span className='hidden md:block text-[22px] font-bold'>: ofertas por categoria</span>
        <span className="hidden md:block ml-5 my-auto p-0 text-[16px] text-gray-600 font-normal cursor-pointer hover:underline">
          Veja mais ofertas
          </span>
      </div>

        <Slide slidesToScroll={isMobile ? 4:6} slidesToShow={isMobile ? 4:6} indicators={false} autoplay={false} 
        transitionDuration={400} arrows={isMobile ? false:true} infinite={false}>
        {slideImages.map( (slideImage, index)=> (
            <div className='mt-5'>
                <div key={index} className='cursor-pointer justify-center object-fit'>
                  <div className='flex flex-col m-0'>
                    <img src={slideImage.img} alt={`Imagem${index}`} />
                    <span className='text-center text-slate-700 font-bold text-xs md:text-xl md:break-keep md:text-center'>{slideImage.caption}</span>
                  </div>
                </div>
            </div>
        ))} 
        </Slide>
    </div>
    )
}