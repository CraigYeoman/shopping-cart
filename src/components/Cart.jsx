import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import ShippingBar from './ShippingBar'

const Cart = ({ percentage, style, freeShipping, shoppingCart, removeFromCart, increaseAmount, decreaseAmount, total, shoppingCartQty, shipping }) => {
    return (
        <div className='cart--container'>Shopping Cart
            <div className='shopping--cart'>
            <div className='cart--items'>
        {shoppingCart.map((product) => {
        return(
        <div key={product.id} id={product.id} className='cart--product'>
            <img alt={product.name} src={product.picture} className='cart--img' id={product.id}/>
            <div className='cart--content'>
                <div className='cart--title'>{product.productName}</div>
                <div>Unit Price ${product.price}</div>
                <div>
                    <div>Qty. {product.qty}</div>
                    <BsFillArrowLeftCircleFill onClick={()=> decreaseAmount(product.id)}/>
                    <BsFillArrowRightCircleFill onClick={()=> increaseAmount(product.id)}/>
                </div>
                <div>Total ${product.qty*product.price}</div>
                <div className='cart--button' onClick={()=> removeFromCart(product.id)}>Remove from Cart</div>
            </div>
        </div>
        )
        })}
            </div>
                <div className='cart--checkout'>
                    <div className='cart--amounts'>Subtotal of {shoppingCartQty} items ${total}</div>
                    <div className='cart--amounts'>Estimated shipping ${shipping}</div>
                    <div className='cart--amounts'>Estimated Grand Total ${total + shipping}</div>
                    <div className='cart--button'>Checkout</div>
                    <div className='cart--info'>{freeShipping}</div>
                    <ShippingBar percentage={percentage} style={style} />
                </div>
                
            </div>
        </div>
        )
}

export default Cart