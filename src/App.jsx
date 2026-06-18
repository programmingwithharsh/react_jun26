import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Star from './Star';
import Title from './Title';
import Welcome from './Welcome';
import Login from './Login';
class App extends React.Component {

    constructor() { // Mounting - component is created and displayed
        super();
        console.log("App constructor lifecycle 1");
    }

    componentDidMount() { // Mounting - component is created and displayed
        console.log("App componentDidMount lifecycle 3");
    }

    render() { // lifecycle
        console.log("App render lifecycle 2");
        return (<div>
            <h1>This is App class Component</h1>
            <ProductList></ProductList>
            <AddProduct></AddProduct>
            <Star></Star>
            <Title></Title>
            <Welcome></Welcome>
            <Login></Login>
        </div>
        );
    }
}

export default App;