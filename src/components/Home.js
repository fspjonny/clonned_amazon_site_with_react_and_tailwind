import React, { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Background from "./Background";

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)
    const toogleMenu = ()=> setShowMenu(!showMenu)

    useEffect(()=>{
        if(showMenu){
        document.body.classList.add('overflow-hidden')
        } else {
        document.body.classList.remove('overflow-hidden')
        }
    }, [showMenu])

    return (
        <>
        <SideBar showMenu={showMenu} toogleMenu={toogleMenu}/>
        <Header toogleMenu={toogleMenu}/>
        <Background>
        <Main />
        <Footer/>
        </Background>
        </>
    )
}
