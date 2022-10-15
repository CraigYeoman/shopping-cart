const Catalog = ({ products, addtoCart }) => {
    return products.map((product) => (
        <div
            key={product.id}
            id={product.id}
            className='product'>
                <img alt={product.name} src={product.picture} className='product--pic' id={product.id}/>
                <div>{product.productName}</div>
                <div>${product.price}</div>
                <div>Volume: {product.volume}</div>
                <button onClick={()=> addtoCart(product.id)}>Add to Cart</button>
        </div>

    ))
}

export default Catalog