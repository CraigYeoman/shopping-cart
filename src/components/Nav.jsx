import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/cart">Shopping Cart</Link>
        </div>
    )
}

export default Nav