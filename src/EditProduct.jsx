import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function EditProduct({ onUpdateProduct }) {
    const navigate = useNavigate(); // navigate hooks
    const [product, setProduct] = useState(null);
    // Object Destructuring in ES6
    let { id } = useParams();
    /*
    1. Call Individual GET API pass id, get data and pass in form value
    2. When user click on Save button, Call PUT API and pass data
    */
    useEffect(() => {
        const storedProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
        const productFound = storedProducts.find(p => p.productId == id);
        if (productFound) {
            setProduct(productFound);
        }
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const updateProduct = {
            ...product,
            "productName": event.target.productName.value,
            "productCode": event.target.productCode.value,
            "releaseDate": event.target.releaseDate.value,
            "description": event.target.description.value,
            "price": event.target.price.value,
            "rating": event.target.rating.value,
            "imageUrl": event.target.imageUrl.value,
        }

        const products = JSON.parse(localStorage.getItem("products")) || [];
        let updateList = products.map(p => p.productId == id ? updateProduct : p);
        localStorage.setItem("products", JSON.stringify(updateList));
        onUpdateProduct(updateProduct);
        navigate("/products");
    }

    if (!product) {
        return <h2>Loading Product ...</h2>
    }

    return (<div>
        <h1>Edit Product, id is {id}</h1>
        <form onSubmit={handleSubmit}>
            Product Name <input className="form-control" type="text" name="productName" defaultValue={product.productName} />
            Product Code <input className="form-control" type="text" name="productCode" defaultValue={product.productCode} />
            Release Date <input className="form-control" type="date" name="releaseDate" defaultValue={product.releaseDate} />
            Description <input className="form-control" type="text" name="description" defaultValue={product.description} />
            Price <input className="form-control" type="number" name="price" defaultValue={product.price} />
            Rating <input className="form-control" type="number" name="rating" defaultValue={product.starRating} />
            Image Url<input className="form-control" type="text" name="imageUrl" defaultValue={product.imageUrl} />
            <input className="btn btn-primary mt-2" type="submit" value="Update Product" />
        </form>
    </div>);
}

export default EditProduct;
