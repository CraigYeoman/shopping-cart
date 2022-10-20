

const Catalog = ({ products, addtoCart }) => {
    return (
    <div className="catalog--container">
    {products.map((product) => {
        return (
        <div key={product.id} id={product.id} className='catalog--product'>
                <img alt={product.name} src={product.picture} className='product--pic' id={product.id}/>
                <div>{product.productName}</div>
                <div>${product.price}</div>
                <div>Volume: {product.volume}</div>
                <div>
                    <button onClick={()=> addtoCart(product.id)}>Add to Cart</button>
                </div>
        </div>)
})}
        </div>
    )
}

export default Catalog