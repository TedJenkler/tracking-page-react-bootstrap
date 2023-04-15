
import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <ul>
            <li>
                <Link to="/products">PRODUCT</Link>
            </li>
            <li>
                <Link to="/features">FEATURES</Link>
            </li>
            <li>
                <Link to="/pricing">PRICING</Link>
            </li>
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
        </ul>
    )
}