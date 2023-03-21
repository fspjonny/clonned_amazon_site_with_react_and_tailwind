import LogoImgFooter from "../assets/imgs/amazon-footer-logo.png";
import Brasil_flag from "../assets/imgs/brazil-flag-icon.png";

export default function Footer() {
    function gotop(params) {
        const element = document.getElementById("root")
        element.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className="relative bottom-0 w-full bg-[#232f3e]">

            <button className="hidden sm:block w-full text-white text-center text-sm bg-[#37475a] hover:bg-slate-600 py-3 cursor-pointer"
            onClick={gotop}>
                Voltar ao início
            </button>
            <button className="block sm:hidden w-full text-white text-center text-[0.70rem] bg-[#37475a] hover:bg-slate-600 py-3 cursor-pointer"
            onClick={gotop}>
                <div className="grid grid-cols-1 grid-rows-2">
                <i class="fa-solid fa-chevron-up"></i> 
                VOLTAR AO TOPO DA PÁGINA
                </div>
            </button>

            <div className="flex flex-col pt-4 text-white ml-[40%] md:m-auto space-y-5 
            md:space-y-0 md:items-start md:justify-evenly md:flex-row md:grid-cols-4 md:grid-rows-2">

                <div className="hidden sm:block">
                    <span className="font-bold">Conheça-nos</span>
                    <div className="mt-3 text-sm text-left break-words text-gray-300">
                        <ul className="space-y-2">
                            <li className="cursor-pointer hover:underline">Informações corporativas</li>
                            <li className="cursor-pointer hover:underline">Carreiras</li>
                            <li className="cursor-pointer hover:underline">Comunicados a imprensa</li>
                            <li className="cursor-pointer hover:underline">Comunidade</li>
                            <li className="cursor-pointer hover:underline">Acessibilidade</li>
                            <li className="cursor-pointer hover:underline">Amazon Science</li>
                        </ul>
                    </div>
                </div>
                
                <div className="hidden sm:block">
                    <span className="font-bold">Ganhe dinheiro conosco</span>
                    <div className="mt-3 text-sm text-left break-words text-gray-400">
                        <ul className="space-y-2">
                            <li className="cursor-pointer hover:underline">Venda na Amazon</li>
                            <li className="cursor-pointer hover:underline">Proteja e construa a sua marca</li>
                            <li className="cursor-pointer hover:underline">Publique seus livros</li>
                            <li className="cursor-pointer hover:underline">Seja um associado</li>
                            <li className="cursor-pointer hover:underline">anuncie seus produtos</li>
                        </ul>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <span className="font-bold">Pagamento</span>
                    <div className="mt-3 text-sm text-left break-words text-gray-400">
                        <ul className="space-y-2">
                            <li className="cursor-pointer hover:underline">Meios de Pagamento</li>
                        </ul>
                    </div>
                </div>

                <div className="hidden w-64 py-2 sm:block sm:w-auto sm:py-0">
                    <span className="font-bold">Deixe-nos ajudar você</span>
                    <div className="mt-3 text-sm text-left break-words text-gray-400">
                        <ul className="space-y-2">
                            <li className="cursor-pointer hover:underline">amazon e COVID-19</li>
                            <li className="cursor-pointer hover:underline">Sua conta</li>
                            <li className="cursor-pointer hover:underline">Frete e prazo de entrega</li>
                            <li className="cursor-pointer hover:underline">Devoluções e reembolsos</li>
                            <li className="cursor-pointer hover:underline">Gerencie seu conteúdo e dispositivos</li>
                            <li className="cursor-pointer hover:underline">Ajuda</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex flex-col sm:hidden justify-evenly mt-4 text-white md:flex-row md:grid-cols-4 md:grid-rows-2">
                    <div className="ml-3 grid grid-cols-2 grid-rows-1 gap-4 text-sm text-left break-words text-white font-medium">
                        <ul className="space-y-4">
                            <li className="cursor-pointer hover:underline">Amazon.com.br de Fábio</li>
                            <li className="cursor-pointer hover:underline">Seus produtos do Programe e Poupe</li>
                            <li className="cursor-pointer hover:underline">Encontre uma lista de desejos ou registro</li>
                            <li className="cursor-pointer hover:underline">Seus itens vistos recentemente</li>
                            <li className="cursor-pointer hover:underline">Configurações de 1-Clique</li>
                            <li className="cursor-pointer hover:underline">Venda na Amazon</li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="cursor-pointer hover:underline">Seus pedidos</li>
                            <li className="cursor-pointer hover:underline">Suas listas</li>
                            <li className="cursor-pointer hover:underline">Sua conta</li>
                            <li className="cursor-pointer hover:underline">Devoluções</li>
                            <li className="cursor-pointer hover:underline">Contate-nos</li>
                            <li className="cursor-pointer hover:underline">Ajuda</li>
                        </ul>
                    </div>
            </div>

            <hr className="hidden sm:block mt-8 border-slate-700"/>

            <div className="grid grid-rows-2 py-8">
                <img className="hidden sm:block w-20 mx-auto cursor-pointer" src={LogoImgFooter} alt="Amazon" />
                <div className="text-gray-400 mx-auto text-xs">
                    <ul className="hidden flex-wrap justify-center md:flex md:flex-row md:space-x-2 md:break-words">
                        <li className="cursor-pointer hover:underline">Austrália</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Alemanha</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Canadá</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">China</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Cingapura</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Espanha</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Estados Unidos</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">França</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Holanda</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Índia</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Itália</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Japão</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">México</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Polônia</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Emirados Árabes Unidos</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Reino Unido</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Turquia</li>
                    </ul>
                    <ul className="hidden md:mt-1 md:flex md:justify-center">
                        <li className="cursor-default">E não se esqueça:
                        <br/>
                        <span className="cursor-pointer hover:underline">Amazon Web Services</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Desktop */}
            <div className="grid grid-cols-1 grid-rows-4 bg-[#131a22]">
                <div className="hidden sm:block my-3 text-gray-300 mx-auto text-xs">
                    <ul className="flex flex-row space-x-2 break-words">
                        <li className="cursor-pointer hover:underline">Condições de uso</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Notificação de provacidade</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Cookies</li>
                        <li>|</li>
                        <li className="cursor-pointer hover:underline">Anúncios Baseados em Interesses</li>
                    </ul>
                    <ul className="hidden md:mt-1 md:flex md:justify-center">
                        <li>&copy;2021-2023 Amazon.com, Inc. ou suas afiliadas</li>
                    </ul>
                </div>

                <div className="hidden sm:block my-4 text-gray-400 mx-auto text-xs">
                    <span>Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</span>
                </div>

                <div className="hidden sm:block my-4 text-gray-400 mx-auto text-xs tracking-wide">
                    <span>Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011|
                        <span className="text-gray-200 mx-2 cursor-pointer hover:underline">Fale conosco</span>| ajuda-amazon@amazon.com.br</span>
                </div>

                <div className="hidden sm:block mt-4 text-gray-400 mx-auto text-xs">
                    <span>Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</span>
                </div>
            </div>

            {/* mobile */}
            <div className="sm:hidden flex grid-cols-1 grid-rows-4 bg-[#131a22]">
                <div className="block my-3 text-gray-300 mx-auto text-xs">
                    <div className="flex flex-row py-4 justify-center space-x-8">
                        <span>
                            <i class="fa-solid fa-globe"></i>
                            <span className="ml-2">Português</span>
                        </span>
                        
                        <span className="flex flex-row">
                            <img className="w-5" src={Brasil_flag} alt="Bandeira do Brasil" />
                            <span className="ml-2">Brasil</span>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center text-white font-medium text-sm">
                        <span className="mx-auto my-1 cursor-pointer hover:underline">Trocar de conta</span>
                        <span className="mx-auto my-3 cursor-pointer hover:underline">Sair</span>
                    </div>


                    <ul className="flex flex-row space-x-4 break-words">
                        <li className="cursor-pointer hover:underline">Cookies</li>
                        <li className="cursor-pointer hover:underline">Condições de uso</li>
                        <li className="cursor-pointer hover:underline">Aviso de privacidade</li>
                    </ul>
                    <ul className="justify-center mt-4 flex">
                        <li>&copy;2021-2023 Amazon.com, Inc. ou suas afiliadas</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}