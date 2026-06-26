import React from "react";
import { Navigate, Link } from 'react-router-dom';

class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            address: "Mumbai"
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const rating = event.target.elements.rating.value;
        const imageUrl = event.target.elements.imageUrl.value;

        const product = {
            "productId": Number(new Date()),
            "productName": productName,
            "productCode": productCode,
            "releaseDate": releaseDate,
            "description": description,
            "price": price,
            "rating": rating,
            "imageUrl": imageUrl
        }
        console.log(product);
        /*
            // Call POST API and send product data
        */
        // later we can store this in localstorage

        let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
        products.push(product);

        if (productName == "") {
            alert("Enter product name");
        } else {
            localStorage.setItem("products", JSON.stringify(products)); // array of object
            this.props.onAddProduct(product); // using functional props
            this.setState({
                redirect: true
            })
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            address: props.address
        }
    }

    render() {
        // Object destructuring
        const { redirect } = this.state;
        console.log(redirect);
        /*
        use if else condition here also
            if(redirect){
                return 
            } else {
                return 
            }
        */

        return (<div className="col-7 mt-2">
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <h1>This is Add Product class Component</h1>
            <div className="alert alert-primary" >
                Address is {this.state.address}
            </div>
            <form onSubmit={this.handleSubmit}>
                Product Name <input className="form-control" type="text" name="productName" placeholder="Enter Product Name" />
                Product Code <input className="form-control" type="text" name="productCode" placeholder="Enter Product Code" />
                Release Date <input className="form-control" type="date" name="releaseDate" />
                Description <input className="form-control" type="text" name="description" placeholder="Enter Description" />
                Price <input className="form-control" type="number" name="price" />
                Rating <input className="form-control" type="number" name="rating" />
                Image Url<input className="form-control" type="text" name="imageUrl" />
                <input className="btn btn-primary mt-2" type="submit" value="Add Product - Submit Form Value" />
                <input className="btn btn-primary m-2" type="reset" value="Reset" />
            </form>
            <Link className="btn btn-primary mt-2" to="/products">Add Product - Normal Link</Link>
        </div>
        );
    }
}

export default AddProduct;