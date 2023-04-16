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


function App() {

  return (
    <div className='container'>
      <div className="row header-nav">
        <div className="col-6 header-part">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div className="col-6 nav-part">
        
          <Nav />
        
        <Routes> 
            <Route path="/products" Component={Products} />
            <Route path="/features" Component={Features} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/login" Component={Login} />
        </Routes>
        </div>
      </div>
      <Item />
      <DesignElement />
      <img id="img" src={Img} alt="img" />
    </div>
  );
}

export default App;
