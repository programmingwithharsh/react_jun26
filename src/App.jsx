import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Title from './Title';
import Welcome from './Welcome';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
        console.log("App constructor lifecycle 1");
        console.log("Props is", this.props);
    }

    componentDidMount() { // Mounting - component is created and displayed
        console.log("App componentDidMount lifecycle 3");
    }

    render() { // lifecycle
        console.log("State is", this.state);
        console.log("App render lifecycle 2");

        return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome userProps={this.props.userProps}></Welcome>} />
                    <Route path="/products" element={<ProductList products={this.state.products}></ProductList>} />
                    <Route path="/title" element={<Title user={this.props.userProps}></Title>} />
                    <Route path="/addproduct" element={<AddProduct></AddProduct>} />
                    <Route path="/login" element={<Login></Login>} />
                </Route>
            </Routes>
        </BrowserRouter>
        );
    }
}

export default App;