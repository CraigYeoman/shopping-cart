import { Link } from "react-router-dom";
import {BsFillCartFill} from 'react-icons/bs'

const Header = ({ shoppingCartQty }) => {
    return (
        <div className="header--container">
            <Link className="header--link" to="/shopping-cart">Home</Link>
            <Link className="header--link" to="/catalog">Catalog</Link>
            <Link className="header--link" to="/cart">Shopping Cart <BsFillCartFill/> {shoppingCartQty}</Link>       
        </div>
    )
}

export default Header