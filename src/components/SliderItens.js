import React, {useState, useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../assets/css/SliderItens.css';

// Imagens que ficariam em um repo web
import item1 from "../assets/imgs/itens/normal/item1.png";
import item2 from "../assets/imgs/itens/normal/item2.png";
import item3 from "../assets/imgs/itens/normal/item3.png";
import item4 from "../assets/imgs/itens/normal/item4.png";
import item5 from "../assets/imgs/itens/normal/item5.png";
import item6 from "../assets/imgs/itens/normal/item6.png";
import item7 from "../assets/imgs/itens/normal/item7.png";
import item8 from "../assets/imgs/itens/normal/item8.png";
import item9 from "../assets/imgs/itens/normal/item9.png";
import item10 from "../assets/imgs/itens/normal/item10.png";
import item11 from "../assets/imgs/itens/normal/item11.png";
import item12 from "../assets/imgs/itens/normal/item12.png";
import item13 from "../assets/imgs/itens/normal/item13.png";
import item14 from "../assets/imgs/itens/normal/item14.png";
import item15 from "../assets/imgs/itens/normal/item15.png";
import item16 from "../assets/imgs/itens/normal/item16.png";
import item17 from "../assets/imgs/itens/normal/item17.png";
import item18 from "../assets/imgs/itens/normal/item18.png";
import item19 from "../assets/imgs/itens/normal/item19.png";
import item20 from "../assets/imgs/itens/normal/item20.png";
import item21 from "../assets/imgs/itens/normal/item21.png";
import item22 from "../assets/imgs/itens/normal/item22.png";
import item23 from "../assets/imgs/itens/normal/item23.png";
import item24 from "../assets/imgs/itens/normal/item24.png";

// API ou registro de tabela que disporia as imagens do repo web
const slideImages = [
  {imageId:'it01', img:item1, caption:"Dispositivos Amazon"},
  {imageId:'it02', img:item2, caption:"Livros"},
  {imageId:'it03', img:item3, caption:"eBooks"},
  {imageId:'it04', img:item4, caption:"Computadores e Informática"},
  {imageId:'it05', img:item5, caption:"Cuidados Pessoais"},
  {imageId:'it06', img:item6, caption:"Games e Consoles"},
  {imageId:'it07', img:item7, caption:"Cozinha"},
  {imageId:'it08', img:item8, caption:"Brinquedos"},
  {imageId:'it09', img:item9, caption:"Bebês"},
  {imageId:'it10', img:item10, caption:"Papelaria e Escritório"},
  {imageId:'it11', img:item11, caption:"Alimentos e Bebidas"},
  {imageId:'it12', img:item12, caption:"Eletrônicos"},
  {imageId:'it13', img:item13, caption:"Ferramentas e Construção"},
  {imageId:'it14', img:item14, caption:"Casa"},
  {imageId:'it15', img:item15, caption:"Beleza"},
  {imageId:'it16', img:item16, caption:"Bebidas Alcoólicas"},
  {imageId:'it17', img:item17, caption:"Jardim e Piscina"},
  {imageId:'it18', img:item18, caption:"DVD's e Blu-ray"},
  {imageId:'it19', img:item19, caption:"Pet Shop"},
  {imageId:'it20', img:item20, caption:"Casa Inteligente"},
  {imageId:'it21', img:item21, caption:"CD e Vinil"},
  {imageId:'it22', img:item22, caption:"Moda"},
  {imageId:'it23', img:item23, caption:"Esportes e Aventura"},
  {imageId:'it24', img:item24, caption:"Automotivo"},
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
        <span className="text-[22px] font-bold">Nevegue por categoria</span>
        {/* <span className='hidden md:block text-[22px] font-bold'>: ofertas por categoria</span> */}
        <span className="hidden md:block ml-5 my-auto p-0 text-[16px] text-gray-600 font-normal cursor-pointer 
        hover:underline">Veja todas as ofertas</span>
      </div>

      <Slide slidesToScroll={isMobile ? 4:6} slidesToShow={isMobile ? 4:6} indicators={false} autoplay={false} 
      transitionDuration={400} arrows={isMobile ? false:true} infinite={false}>
        {slideImages.map((slideImage) => (
          <div className='mt-5' key={slideImage.imageId}>
            <div className='cursor-pointer justify-center object-fit'>
              <div className='flex flex-col m-0'>
                <img src={slideImage.img} alt={slideImage.caption} className="object-contain w-52" />
                <span className='text-sm mx-auto text-gray-800 font-bold'>{slideImage.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </Slide>

    </div>
    )
}