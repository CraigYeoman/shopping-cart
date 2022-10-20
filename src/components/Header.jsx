import { Link } from "react-router-dom";
import {BsFillCartFill} from 'react-icons/bs'

const Header = ({ shoppingCartQty }) => {
    return (
        <div className="header--container">
            <Link className="header--link" to="/">Home</Link>
            <Link className="header--link" to="/catalog">Catalog</Link>
            <Link className="header--link" to="/cart">Shopping Cart</Link>       
            <BsFillCartFill className="header--link"/>
            <div className="header--link">{shoppingCartQty}</div>
        </div>
    )
}

export default Header