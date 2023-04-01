import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/logon' element={<Login />} />
          <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App;
