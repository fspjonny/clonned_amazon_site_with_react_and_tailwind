import React, { useState, useEffect } from "react";
import "../assets/css/SideBar.css";
import Cookies from "js-cookie";
import { logOff } from "../assets/utils/utils";

export default function SideBar(props) {
    const [height, setHeight] = useState('')
    useEffect(() => {
        const updateHeight = () => {
            const screenHeight = window.innerHeight
            setHeight(`${screenHeight}px`)
            };
        updateHeight();
        window.addEventListener('resize', updateHeight)
        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    const cookies = Cookies.get()
    const hasCookie = Object.keys(cookies).length === 1

    return (
        <div id="menu" className={`fixed flex flex-col w-[100%] h-[100%] bg-black/70 z-20 ${props.showMenu ? 'visible' : 'collapse'}`}>

            <div className={props.showMenu ? 'visible' : 'collapse'}>
                <div className="flex justify-between align-middle w-[355px] md:w-[420px] cursor-pointer">
                    
                    {/* desktop */}
                    <div className="hidden bg-[#232f3e] w-full md:flex flex-row items-center pl-5 py-3">
                        <i className="flex justify-center items-center w-6 h-6 bg-white rounded-full text-[#232f3e] text-[18px] 
                        fa-solid fa-user"></i>
                        <span className="ml-3 text-white text-[1.2rem] font-bold">
                            {hasCookie ? `Olá, ${cookies.username} `: "Olá"}
                        </span>
                    </div>

                    {/* mob */}
                    <div className="md:hidden bg-[#232f3e] w-full flex flex-col justify-between h-32">
                        <div className="text-white pr-3 pt-4 flex justify-end">
                            <span className="ml-3 text-[0.93rem] font-medium">Sua conta</span>
                            <i className="text-[18px] ml-2 fa-regular fa-user"></i>
                        </div>

                        <div className="text-white flex flex-col">
                            <span className="pl-5 pb-4 text-2xl w-28 font-semibold break-words tracking-tight">Explorar Amazon</span>
                        </div>
                    </div>

                    <div className="flex">
                        <button onClick={props.toogleMenu} className="text-white pr-6 ml-2 text-[1.8rem] ">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div className="bg-white text-[#525252] w-[305px] md:w-[370px] overflow-y-auto" style={{height}}>

{/* CONTEÚDO PARA DESKTOPS */}
                    <p className="hidden md:block ml-8 py-2 text-black font-bold text-[1.1rem]">Destaques</p>
                    <ul className="hidden md:block  text-[0.9rem] font-medium">
                        <li className="pl-8 py-3 hover:bg-[#eaeded] cursor-pointer">Mais Vendidos</li>
                        <li className="pl-8 py-3 hover:bg-[#eaeded] cursor-pointer">Novidades na Amazon</li>
                        <li className="pl-8 py-3 hover:bg-[#eaeded] cursor-pointer">Produtos em alta</li>
                    </ul>

                    <hr className="hidden md:block my-2"/>

                    <p className="hidden md:block ml-8 py-2 text-black font-bold text-[1.1rem]">Conteúdo Digital E Dispositivos</p>
                    <ul className="hidden md:block text-[0.9rem] font-medium">
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Amazon Fire TV 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Amazon Music 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Prime Video 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Aplicativos Amazon 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Dispositivos Kindle e eBooks 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Echo e Alexa 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                    </ul>

                    <hr className="hidden md:block my-2"/>

                    <p className="hidden md:block ml-8 py-2 text-black font-bold text-[1.1rem]">Comprar Por Categoria</p>
                    <ul className="hidden md:block text-[0.9rem] font-medium">
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Alimentos e Bebidas 
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Automotivo
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Bebês
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Beleza e Cuidados Pessoais
                            <i className="mr-4 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-right"></i>
                        </li>
                        <li className="flex flex-row items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Ver Tudo 
                            <i className="ml-3 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>

                    <hr className="hidden md:block my-2"/>

                    <p className="hidden md:block ml-8 py-2 text-black font-bold text-[1.1rem]">Programas E Recursos</p>
                    <ul className="hidden md:block text-[0.9rem] font-medium">
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Amazon Prime
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Amazone Super
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Dicas de Presentes
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Lista do Bebê
                        </li>
                        <li className="flex flex-row items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Ver Tudo 
                            <i className="ml-3 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>
                    <hr className="hidden md:block my-2"/>

                    <p className="hidden md:block ml-8 py-2 text-black font-bold text-[1.1rem]">Ajuda E Configurações</p>
                    <ul className="hidden md:block text-[0.9rem] font-medium">
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Sua Conta
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Ajuda
                        </li>
                        <li className="flex flex-row justify-between items-center pl-8 py-3 group hover:bg-[#eaeded] cursor-pointer"
                         onClick={logOff}>
                            Sair
                        </li>
                    </ul>
                    <ul>
                        <li className="hidden md:block mb-26"></li>
                    </ul>

{/* CONTEÚDO PARA MOBILE */}
                    <span className="md:hidden flex flex-row justify-between items-start">
                        <p className="ml-5 pt-5 w-40 text-black font-bold text-[1.2rem] break-words">Página Inicial Da Amazon</p>
                        <i className="mr-5 pt-7 text-[1.2rem] text-black fa-solid fa-house"></i>
                    </span>

                    <hr className="md:hidden mt-3 border-3"/>
                    
                    <ul className="md:hidden text-[0.9rem] font-medium">
                        <li className="text-black text-[1.2rem] font-bold pt-3 pb-2 pl-5">Destaques</li>
                        <li className="text-[1rem] pl-5 py-4 hover:bg-[#eaeded] cursor-pointer">Mais Vendidos</li>
                        <li className="text-[1rem] pl-5 py-4 hover:bg-[#eaeded] cursor-pointer">Novidades na Amazon</li>
                        <li className="text-[1rem] pl-5 py-4 hover:bg-[#eaeded] cursor-pointer">Produtos em alta</li>
                    </ul>
                    
                    <hr className="md:hidden mt-3 border-3"/>

                    <p className="md:hidden pl-5 py-2 text-black font-bold text-[1.2rem]">Categorias Principais</p>
                    <ul className="md:hidden text-[0.9rem] font-medium">
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Computadores e Informática</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Casa</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Livros</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Eletrônicos</li>
                        <li className="flex flex-row text-[1rem] items-center pl-5 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Ver Tudo 
                            <i className="ml-2 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>

                    <hr className="md:hidden mt-3 border-3"/>

                    <p className="md:hidden pl-5 py-2 text-black font-bold text-[1.2rem]">Programas E Recursos</p>
                    <ul className="md:hidden text-[0.9rem] font-medium">
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Ofertas do Dia</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Amazon Prime</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Amazon Family</li>
                        <li className="pl-5 py-3 text-[1rem] hover:bg-[#eaeded] cursor-pointer">Venda na Amazon</li>
                        <li className="flex flex-row text-[1rem] items-center pl-5 py-3 group hover:bg-[#eaeded] cursor-pointer">
                            Ver Tudo 
                            <i className="ml-2 text-gray-400 group-hover:text-gray-900 fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>

                    <ul>
                        <li className="md:hidden mb-40"></li>
                    </ul>
{/* FINAL DOS MENUS */}
                </div>
            </div>

        </div>
    )
}