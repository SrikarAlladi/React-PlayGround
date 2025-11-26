
const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product?.thumbnail} className="product-image" ></img>
            <span className="product-title">
                {product?.title}
            </span>
        </div>   
    )
}

export default Product;