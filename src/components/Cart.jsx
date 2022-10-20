import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Cart = ({ shoppingCart, removeFromCart, increaseAmount, decreaseAmount }) => {
    return (
        <div className='cart--container'>
            <div className='shopping--cart'>Shopping Cart
        {shoppingCart.map((product) => {
        return(
        <div key={product.id} id={product.id} className='cart--product'>
            <img alt={product.name} src={product.picture} className='cart--img' id={product.id}/>
            <div className='cart--content'>
                <div>{product.productName}</div>
                <div>${product.price}</div>
                <div>
                    <div>Qty. {product.qty}</div>
                    <BsFillArrowLeftCircleFill onClick={()=> decreaseAmount(product.id)}/>
                    <BsFillArrowRightCircleFill onClick={()=> increaseAmount(product.id)}/>
                </div>
                <div>Total ${product.qty*product.price}</div>
                <button onClick={()=> removeFromCart(product.id)}>Remove from Cart</button>
            </div>
        </div>
        )
        })}
            </div>
        </div>
        )
}

export default Cart