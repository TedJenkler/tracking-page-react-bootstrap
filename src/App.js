import logo from "./images/logo.svg"
import Nav from "./Compnents/Nav"
import { Route, Routes } from "react-router-dom";
import Products from "./Compnents/Products";
import Features from "./Compnents/Features";
import Pricing from "./Compnents/Pricing";
import Login from "./Compnents/Login";


function App() {
  return (
    <div className='container'>
      <div className="row header-nav">
        <div className="col-6 header">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div className="col-6 nav">
        
          <Nav />
        
        <Routes> 
            <Route path="/products" Component={Products} />
            <Route path="/features" Component={Features} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/login" Component={Login} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
