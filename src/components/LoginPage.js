import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "../assets/imgs/login_logo_amazon.png";


export default function Login() {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')

    const inputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const expires = new Date()
    expires.setDate(expires.getDate()+1)
  
    const cookies = Cookies.get();
    const hasCookie = Object.keys(cookies).length === 1;

    useEffect(() => {
        if (hasCookie) {
        navigate("/");
        }
    },[hasCookie, navigate])    
    

    function setCookie(){
        if(inputValue===""){
            Cookies.set('username', 'Anônimo', {expires:expires})
            navigate("/")
        } else {
            Cookies.set('username', inputValue, {expires:expires})
            navigate("/")
        }
    }

    return (
        <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-center mt-5 md:mt-4">
                <Link to={'/'}>
                <img className="w-36 md:w-auto" src={logo} alt="Amazon.com.br" />
                </Link>
            </div>

            <div className="flex flex-col mx-auto w-[350px] mt-5 md:mt-4 rounded-md border-[1px] border-solid border-gray-300">
                <span className="ml-6 mt-3 font-medium text-[1.7rem] ">Fazer Login</span>
                
                <span className="ml-6 my-2 font-bold md:text-[0.8rem]">Digite um nome de usuário</span>
                
                <input className="bg-[#e8f0fe] text-[1rem] mx-6 rounded-sm p-[0.2rem] border-[1px] border-solid 
                focus:outline-none border-gray-400 focus:shadow-[0px_0px_4px_1px_rgba(255,126,0)]" value={inputValue} type="text" onChange={inputChange}/>

                <button className="text-[1rem] mx-6 my-4 bg-gradient-to-b from-orange-200 via-[#e7bf58] to-orange-200
                rounded-sm p-[0.2rem] border-[1px] border-solid border-gray-500 
                hover:bg-gradient-to-b hover:from-orange-300 hover:via-[#e0bb5e] hover:to-orange-300"
                onClick={setCookie}>Continuar</button> 

                <span className="mx-6 mt-1 text-[0.7rem]">
                    Ao continuar, você concorda com as 
                    <span className="text-blue-600 hover:underline cursor-pointer hover:text-[#c45500]"> Condições de Uso</span> da Amazon. 
                    Por favor verifique a 
                    <span className="text-blue-600 hover:underline cursor-pointer hover:text-[#c45500]"> Notificação de Privacidade</span>, 
                    <span className="text-blue-600 hover:underline cursor-pointer hover:text-[#c45500]"> Notificação de Cookies</span> e a
                    <span className="text-blue-600 hover:underline cursor-pointer hover:text-[#c45500]"> Notificação de Anúncios Baseados em Interesse.
                    </span>
                </span>

                <span className="mx-6 my-5 text-[0.7rem] hover:underline cursor-pointer hover:text-[#c45500]">
                    <i className="text-[#656565] mr-2 fa-solid fa-caret-right"></i>
                    <span className="text-blue-600 text-[0.8rem] hover:text-[#c45500]">Precisa de ajuda?</span>
                </span>
            </div>

            <div className="flex flex-col mx-auto w-[350px] mt-6">
                <div className="absolute flex flex-col justify-center items-center">
                <hr className="relative border-1 border-gray-1 w-[350px]"/>
                <span className="absolute bg-white px-2 font-semibold text-muted text-[0.7rem] text-gray-500">Novo na Amazon?</span>
                </div>
            </div>

            <div className="flex flex-col mx-auto w-[350px] my-5">
                <button className="text-[0.9rem] bg-gradient-to-b from-slate-100 via-[#edeff1] 
                to-slate-100 rounded-sm p-[0.2rem] border-[1px] border-solid border-gray-400 
                hover:bg-gradient-to-b hover:from-slate-200 hover:via-[#dee4ec] hover:to-slate-200"
                onClick={()=> navigate("/")}>
                    Criar sua conta da Amazon
                </button>
            </div>

            <div className="flex flex-col mx-auto w-[350px] h-[0.2rem] bg-gradient-to-r from-gray-50 from-30%
            via-gray-200 via-30% to-gray-50 to-30%">
            </div>

            <div className="flex flex-col mx-auto w-[350px] bg-gradient-to-b from-gray-50/20 from-30% via-gray-50 to-gray-50/20 to-30%">
                <div className="mt-6 text-blue-500 text-[0.7rem] flex flex-wrap justify-evenly">
                    <p className=" hover:underline cursor-pointer hover:text-[#c45500]">Condições de Uso</p>
                    <p className=" hover:underline cursor-pointer hover:text-[#c45500]">Política de Privacidade</p>
                    <p className=" hover:underline cursor-pointer hover:text-[#c45500]">Ajuda</p>
                    <p className=" hover:underline cursor-pointer hover:text-[#c45500]">Cookies</p>
                    <p className=" hover:underline cursor-pointer hover:text-[#c45500]">Anúncios Baseados em Interesses</p>
                </div>
            </div>

            <div className="flex flex-row mt-2 text-[0.7rem] justify-center mx-auto w-[350px]">© 2021-2023 Amazon.com, Inc. ou suas afiliadas</div>
        </div>
        </>
    )
}