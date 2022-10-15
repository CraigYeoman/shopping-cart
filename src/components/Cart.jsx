const Cart = ({ shoppingCart }) => {
    return shoppingCart.map((item) => (
        <div key={item.id} id={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
        </div>
    ))
}

export default Cart