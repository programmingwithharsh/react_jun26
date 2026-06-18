import Product from "./Product";
function ProductList(props) {
    return (<div>
        <h1>This is Product List Functional Component</h1>
        {props.products.map((product, index) => (
            <Product key={index} {...product} />
        ))}
    </div>);
}

export default ProductList;