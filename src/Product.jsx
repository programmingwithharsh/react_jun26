import Star from "./Star";
function Product(props) {
    console.log("Product props is", props);
    return (<tr key={props.index}>
        <td><img src={props.product.imageUrl} width="50" height="50" /></td>
        <td>{props.product.productName}</td>
        <td>{props.product.productCode}</td>
        <td>{props.product.releaseDate}</td>
        <td>{props.product.description}</td>
        <td>{props.product.price}</td>
        <td><Star rating={props.product.starRating}></Star></td>
    </tr>
    );
}

export default Product;