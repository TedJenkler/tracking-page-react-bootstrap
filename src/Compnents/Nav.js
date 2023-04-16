
import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/products">PRODUCT</Link>
            </li>
            <li className="nav-item">
                <Link to="/features">FEATURES</Link>
            </li>
            <li className="nav-item nav-item-left">
                <Link to="/pricing">PRICING</Link>
            </li>
            <li className="nav-item" id="special-link">
                <Link to="/login">LOGIN</Link>
            </li>
        </ul>
    )
}