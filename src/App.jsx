import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Title from './Title';
import Welcome from './Welcome';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Register from './Register';
import PageNotFound from './PageNotFound';
import EditProduct from './EditProduct';
import HooksExample from './Hooks/HooksExample';
import CoreBootstrap from './Core-Bootstrap/CoreBootstrap';
import ReactBootstrap from './React-Bootstrap/ReactBootstrap';

class App extends React.Component {

    constructor(props) { // Mounting - component is created and displayed
        super(props);
        this.state = {
            username: "Anuradha",
            products: [ // default products
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
            ]
        }
        console.log("App constructor lifecycle 1");
        console.log("Props is", this.props);
    }

    componentDidMount() { // Mounting - component is created and displayed
        // Call GET API, get data and update state
        if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(this.state.products));
        }

        const storedProducts = JSON.parse(localStorage.getItem("products")); // load data from localstorage
        this.setState({
            products: storedProducts
        })
    }

    addProduct = (productSubmitted) => {
        this.setState(() => {
            const updateProducts = [...this.state.products, productSubmitted];
            localStorage.setItem("products", JSON.stringify(updateProducts)); // saving to localstorage
            return {
                products: updateProducts
            }
        })
    }

    updateProduct = (updatedProduct) => { // update state
        this.setState((state) => ({ // whenever state component rerender
            products: state.products.map(p =>
                p.productId == updatedProduct.productId ? updatedProduct : p
            )
        }))
    }

    render() { // lifecycle
        console.log("State is", this.state);
        console.log("App render lifecycle 2");

        return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome userProps={this.props.userProps}></Welcome>} />
                    <Route path="/products" element={<ProductList products={this.state.products}></ProductList>} />
                    <Route path="/title" element={<Title></Title>} />
                    <Route path="/addproduct" element={<AddProduct onAddProduct={(addedProduct) => this.addProduct(addedProduct)} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/editproduct/:id" element={<EditProduct onUpdateProduct={(p) => this.updateProduct(p)} user={this.props.userProps} />} />
                    <Route path="/hooks" element={<HooksExample />} />
                    <Route path="/corebs" element={<CoreBootstrap />} />
                    <Route path="/reactbs" element={<ReactBootstrap />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
        );
    }
}

export default App;