import amazon_logo from "../assets/imgs/amazon_logo.png";
import endereco from "../assets/imgs/endereco.png";
import m_endereco from "../assets/imgs/m_endereco.png";
import chevron from "../assets/imgs/chevron_down.png";
import carrinho from "../assets/imgs/carrinho.png";
import m_carrinho from "../assets/imgs/m_carrinho.png";
import m_user from "../assets/imgs/m_user.png";


export default function Header() {
    return (
        <div class="grid text-white">
            <div class="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
                <div class="md:hidden py-1 px-2 hover:border-white rounded  cursor-pointer">
                    <i class="fas fa-bars text-2xl"></i>
                </div>
                <div class="flex border border-transparent hover:border-white rounded-sm cursor-pointer">
                    <img src={amazon_logo} alt="Amazon logo"/>
                </div>

                <div
                    class="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2 cursor-pointer">
                    <img src={endereco} alt="endereço"/>
                </div>
                <div class="w-full md:w-auto flex-grow md:ml-3 mr-0 pt-1 order-2 md:order-none">
                    <form action=""
                        class="flex focus-within:border-orange-660 focus-within:border-3 focus-within:rounded-lg">
                        <select class="hidden p-2 text-xs text-gray-700 bg-gray-100 md:w-20 md:block hover:bg-gray-200 rounded-tl rounded-bl 
                        border-r border-gray-500 focus:border-orange-660 focus:border-2 cursor-pointer">
                            <option>Todos</option>
                            <option>Alexa Skills</option>
                            <option>Alimentos e Bebidas</option>
                            <option>Apps e Jogos</option>
                            <option>Automotivo</option>
                            <option>Bebês</option>
                            <option>Beleza</option>
                            <option>Beleza de Luxo</option>
                            <option>Bolsas, Malas e Mochilas</option>
                            <option>Brinquedos e Jogos</option>
                            <option>Casa</option>
                            <option>CD e Vinil</option>
                            <option>Computadores e Informática</option>
                            <option>Cozinha</option>
                            <option>Dispositivos Amazon</option>
                            <option>DVD e Blu-Ray</option>
                            <option>Eletrodomésticos</option>
                            <option>Eletrônicos</option>
                            <option>Esportes e Aventura</option>
                            <option>Ferramentas e Materiais de Construção</option>
                            <option>Games</option>
                            <option>Instrumentos Musicais</option>
                            <option>Jardim e Piscina</option>
                            <option>Livros</option>
                            <option>Loja Kindle</option>
                            <option>Material para Escritório e Papelaria</option>
                            <option>Móveis e Decoração</option>
                            <option>Pet Shop</option>
                            <option>Prime Video</option>
                            <option>Produtos Industriais e Científicos</option>
                            <option>Programe e Poupe</option>
                            <option>Roupas, Calçados e Joias</option>
                            <option>&nbsp;&nbsp;&nbsp;Feminino</option>
                            <option>&nbsp;&nbsp;&nbsp;Masculino</option>
                            <option>&nbsp;&nbsp;&nbsp;Meninas</option>
                            <option>&nbsp;&nbsp;&nbsp;Meninos</option>
                            <option>&nbsp;&nbsp;&nbsp;Bebês</option>
                            <option>Saúde e Cuidados Pessoais</option>                            
                        </select>

                        <input type="text"
                            class="p-2 text-black flex-grow rounded-l md:rounded-none focus:outline-none sm:placeholder:text-white"
                            placeholder="Pesquisa Amazon.com.br"/>

                        <button class="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                            <i class="fas fa-search text-darkblue-900 text-xl"></i>
                        </button>
                    </form>
                </div>
                <div
                    class="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2 cursor-pointer">
                    <p class="leading-3">Olá, Fábio</p>
                    <div class="flex flex-cols-2 pr-2 relative">
                        <p class="font-bold text-sm">Contas e Listas</p>
                        <img src={chevron} alt="img chevron" class="w-2 absolute bottom-1.5 left-26"/>
                    </div>
                </div>

                <div
                    class="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2 cursor-pointer">
                    <p class="leading-3">Devoluções</p>
                    <p class="font-bold text-sm">e Pedidos</p>
                </div>

                <div
                    class="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2 cursor-pointer">
                    <img src={carrinho} alt="carrinho"/>
                </div>
                <div class="md:hidden">
                    <img src={m_user} alt="user avatar"/>
                </div>
                <div class="md:hidden float-right">
                    <img src={m_carrinho} alt="carrinho mobile"/>
                </div>
            </div>
            <div class="bg-darkblue-700 text-sm px-4 items-center overflow-x-auto">

                <ul class="flex m-1">
                    <li class="item-second-nav">
                        <p class="hidden text-sm p-1 whitespace-nowrap font-semibold cursor-pointer md:block">
                            <i class="fas fa-bars text-xl mr-2 align-middle"></i>Todos
                        </p>
                        <p class="md:hidden text-sm font-semibold p-1 whitespace-nowrap cursor-pointer">Suas Listas</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="hidden md:block item-nav-normal">Venda na Amazon</p>
                        <p class="item-mobile-nav">Mais Vendidos</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="hidden md:block item-nav-normal">Comprar novamente</p>
                        <p class="item-mobile-nav">Amazon Prime</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="hidden md:block item-nav-normal">Eletrônicos</p>
                        <p class="item-mobile-nav">Comprar novamente</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="hidden md:block item-nav-normal">Computadores</p>
                        <p class="item-mobile-nav">Livros</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="hidden md:block item-nav-normal">Ideias para Presente</p>
                        <p class="item-mobile-nav">Descobrir um presente</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="item-mobile-nav">Eletrônicos</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="item-mobile-nav">Novidades na Amazon</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="item-mobile-nav">Casa</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="item-mobile-nav">Computadores</p>
                    </li>

                    <li class="item-second-nav px-2">
                        <p class="item-mobile-nav">Música</p>
                    </li>
                </ul>
            </div>
            <div class="bg-darkblue-550 text-sm pl-4 p-2 items-center md:hidden">
                <img src={m_endereco} class="cursor-pointer" alt="endereço"/>
            </div>
        </div>
    )
}