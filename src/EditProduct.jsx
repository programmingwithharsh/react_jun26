import { useParams } from 'react-router-dom';

function EditProduct(props) {
    // Object Destructuring in ES6
    let { id } = useParams();
    /*
    1. Call Individual GET API pass id, get data and pass in form value
    2. When user click on Save button, Call PUT API and pass data
    */

    console.log(props);
    return (<div>
        <h1>Edit Product, id is {id}</h1>
    </div>);
}

export default EditProduct;
