import { Link } from "react-router-dom"


const BurgerMenu = () => {
    return (
        <ul className="nav-mobile-hidden">
            <li className="nav-item-mobile">
                <Link to="/products">PRODUCT</Link>
            </li>
            <li className="nav-item-mobile">
                <Link to="/features">FEATURES</Link>
            </li>
            <li className="nav-item-mobile">
                <Link to="/pricing">PRICING</Link>
            </li>
            <div className="mobile-login-divider">
            </div>
            <li className="nav-item-mobile mobile-login" id="special-link">
                <Link to="/login">LOGIN</Link>
            </li>
        </ul>
    )
}

export default BurgerMenu