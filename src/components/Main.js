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

const images = [
    <img src={banner1} alt="Banner 1"/>,
    <img src={banner2} alt="Banner 2"/>,
    <img src={banner3} alt="Banner 3"/>,
    <img src={banner4} alt="Banner 4"/>,
]


export default function Main() {

    return (
        <Gradiente intervalo={8000}>
        <div id="gradiente">
            <main>
                <span className="cursor-pointer">
                    <BannerSlideShow images={images} intervalo={8000} direction={"left"}></BannerSlideShow>
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