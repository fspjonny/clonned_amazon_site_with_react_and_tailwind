import DisplayGrid from "./DisplayGrid";
import Card from "./Card";
import Image from "./Images";
import SliderItens from "./SliderItens";

export default function Main() {
    return (
        <main>
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
    )
}