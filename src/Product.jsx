import Star from "./Star";
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Product(props) {
    console.log("Product props is", props);
    return (<><tr key={props.index}>
        <td><img src={props.product.imageUrl} width="50" height="50" /></td>
        <td><Link to={`/product/${props.product.productId}`}>{props.product.productName}</Link></td>
        <td>{props.product.productCode}</td>
        <td>{props.product.releaseDate}</td>
        <td>{props.product.description}</td>
        <td>{props.product.price}</td>
        <td><Star rating={props.product.starRating}></Star></td>
        <td><Link to={`/editproduct/${props.product.productId}`}>Edit</Link> | <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Delete
        </button></td>
    </tr>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm user deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className={`modal-footer ${styles.customFooter}`}>
                        <button type="button" className="btn btn-primary">OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Product;