import React, {useState, useEffect} from 'react';
import Card from "./Card";
import DisplayGrid from "./DisplayGrid";
import Image from "./Images";
import Gradiente from "./GradientColor";
import BannerSlideShow from "./BannerSlideShow";
import SliderItens from "./SliderItens";


import banner1 from "../assets/imgs/banner1.png";
import banner2 from "../assets/imgs/banner2.png";
import banner3 from "../assets/imgs/banner3.png";
import banner4 from "../assets/imgs/banner4.png";

import mob_banner1 from "../assets/imgs/itens/banner_mobile/banner1.png";
import mob_banner2 from "../assets/imgs/itens/banner_mobile/banner2.png";
import mob_banner3 from "../assets/imgs/itens/banner_mobile/banner3.png";
import mob_banner4 from "../assets/imgs/itens/banner_mobile/banner4.png";

const normal_images = [
    <img src={banner1} alt="Banner 1"/>,
    <img src={banner2} alt="Banner 2"/>,
    <img src={banner3} alt="Banner 3"/>,
    <img src={banner4} alt="Banner 4"/>,
]
const mob_images = [
    <img src={mob_banner1} alt="Banner 1"/>,
    <img src={mob_banner2} alt="Banner 2"/>,
    <img src={mob_banner3} alt="Banner 3"/>,
    <img src={mob_banner4} alt="Banner 4"/>,
]


export default function Main() {
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

    return (
        <Gradiente intervalo={8000}>
        <div id="gradiente">
            <main>
                <span className="cursor-pointer">
                    <BannerSlideShow images={isMobile ? mob_images:normal_images} intervalo={8000} direction={"left"}></BannerSlideShow>
                </span>
                <DisplayGrid>
                    <Card image={Image.card1} titulo="Ofertas em Echo com Alexa" nomeImagem="produtos Alexa" link="Compre agora"/>
                    <Card image={Image.card2} titulo="Ofertas em PCs e Acessórios" nomeImagem="ofertas" link="Ver ofertas"/>
                    <Card image={Image.card3} titulo="Ofertas do dia" nomeImagem="produtos Alexa" link="Veja mais"/>
                    <Card image={Image.card4} titulo="Utilidades" nomeImagem="utilidades" link="Veja mais"/>
                    <Card image={Image.card5} titulo="Continue onde parou" nomeImagem="ofertas" link="Veja mais"/>
                    <Card image={Image.card6} titulo="Amazon Prime" nomeImagem="Amazon Prime" link="Saiba mais"/>
                    <Card image={Image.card7} titulo="Novo Kindle 11º Geração" nomeImagem="produtos Alexa" link="Compre agora"/>
                    <Card image={Image.card8} titulo="Membros Prime tem frete GRÁTIS" nomeImagem="membros prime" link="Saiba mais"/>
                </DisplayGrid>
                <SliderItens/>
            </main>
        </div>
        </Gradiente>
    )
}