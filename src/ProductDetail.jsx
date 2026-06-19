import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    // Object Destructuring in ES6
    let { id } = useParams();
    console.log(props);
    return (<div>
        <h1>Product Detail, id is {id}</h1>
    </div>);
}

export default ProductDetail;