import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Background from "./components/Background";

function App() {

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
    <div>
      <SideBar showMenu={showMenu} toogleMenu={toogleMenu}/>
      <Header toogleMenu={toogleMenu}/>
      <Background>
      <Main/>
      <Footer/>
      </Background>
    </div>
  )
}

export default App;
