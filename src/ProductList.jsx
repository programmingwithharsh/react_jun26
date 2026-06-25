// import Product from "./Product";
import Star from "./Star";
import { Link } from 'react-router-dom';
import { useState } from "react";

function ProductList(props) {
    const [deleteId, setDeleteId] = useState(null);

    const openDeleteModal = (id) => {
        setDeleteId(id)
    }

    const confirmOk = () => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || []; // get all products from localstorage
        let updatedProducts = storedProducts.filter(p => p.productId !== deleteId); // filter localstorage products based on deleteId
        localStorage.setItem("products", JSON.stringify(updatedProducts)); // setting again in localstorage
        window.location.reload(); // reload browser
    }

    return (
        <div className="table-responsive">
            <h1>This is Product List Functional Component</h1>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.imageUrl} width="50" height="50" /></td>
                            <td><Link to={`/product/${product.productId}`}>{product.productName}</Link></td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><Star rating={product.starRating}></Star></td>
                            <td><Link to={`/editproduct/${product.productId}`}>Edit</Link> | <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => openDeleteModal(product.productId)}>
                                Delete
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm user deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={confirmOk}>OK</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductList;