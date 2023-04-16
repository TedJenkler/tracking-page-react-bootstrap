import logo from "./images/logo.svg"
import Nav from "./Compnents/Nav"
import { Route, Routes } from "react-router-dom";
import Products from "./Compnents/Products";
import Features from "./Compnents/Features";
import Pricing from "./Compnents/Pricing";
import Login from "./Compnents/Login";
import Item from "./Compnents/Item";
import DesignElement from "./Compnents/DesignElement";
import Img from "./images/illustration-devices.svg"
import Burger from "./images/icon-hamburger.svg"
import { useState } from "react";
import BurgerMenu from "./Compnents/BurgerMenu";


function App() {

  const [menu, setMenu] = useState(false);

  function toggleMenu(){
    if(menu == false){
      return setMenu(true)
    }
    else {
      return setMenu(false)
    }
  }

  return (
    <div className='container'>
      <div className="row header-nav">
        <div className="col-6 header-part">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div className="col-6 nav-desktop">
        
          <Nav />
        
        <Routes> 
            <Route path="/products" Component={Products} />
            <Route path="/features" Component={Features} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/login" Component={Login} />
        </Routes>
        </div>
        <div className="col-6 nav-mobile">
        {!menu ? "" : <BurgerMenu />}
        {console.log(menu)}
        <button className="burgermenu-button" onClick={toggleMenu}><img src={Burger} alt="mobilemenu" /></button>
        
        <Routes> 
            <Route path="/products" Component={Products} />
            <Route path="/features" Component={Features} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/login" Component={Login} />
        </Routes>
        </div>
        
      </div>
      <div className="displayer">
      <Item />
      <DesignElement />
      <img id="img" src={Img} alt="img" />
      </div>
    </div>
  );
}

export default App;
