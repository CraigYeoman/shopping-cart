import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Cart = ({ shoppingCart }) => {
    return (
        <div>
        {shoppingCart.map((product) => {
        return(
        <div key={product.id} id={product.id} className='product'>
            <img alt={product.name} src={product.picture} className='product--pic' id={product.id}/>
            <div>{product.productName}</div>
            <div>${product.price}</div>
            <div>Qty. {product.qty}</div>
            <div>Total ${product.qty*product.price}</div>
        </div>
        )
        })}
        </div>
        )
}

export default Cart