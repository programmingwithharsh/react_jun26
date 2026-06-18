function Product(props) {
    console.log("Product props is", props);
    return (<h1>This is Product Functional Component, Props name is {props.name}</h1>);
}

export default Product;