function Product(props){
    const {title, price,desc,category} = props.data
    return(
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{category}</p>
            <p>{desc}</p>
        </div>
    )
}
export default Product