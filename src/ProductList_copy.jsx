import Product from "./Product";
import { Link } from "react-router-dom";

function ProductList(props) { // props.products is the array of object [{}, {}]
    return (
        <div className="table-responsive">
            <h1>This is Product List Functional Component</h1>
            <Link className="btn btn-primary m-2" to="/addproduct">Add Product</Link>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Release Date</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;