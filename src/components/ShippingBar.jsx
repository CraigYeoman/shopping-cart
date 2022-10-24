const ShippingBar = ({ percentage, style }) => {
    return (
        <div className="shipping-bar">
            <div className="shipping-bar-progress" style={style}>
                {percentage}%
            </div>
        </div>
    )
}

export default ShippingBar