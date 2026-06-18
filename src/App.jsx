import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Star from './Star';
import Title from './Title';
import Welcome from './Welcome';
import Login from './Login';
class App extends React.Component {

    constructor(props) { // Mounting - component is created and displayed
        super(props);
        this.state = {
            username: "Anuradha",
            products: []
        }
        console.log("App constructor lifecycle 1");
        console.log("Props is", this.props);
    }

    componentDidMount() { // Mounting - component is created and displayed
        console.log("App componentDidMount lifecycle 3");
    }

    updateUsername = () => {
        this.setState({
            username: "Neha"
        })
    }

    render() { // lifecycle
        console.log("State is", this.state);
        console.log("App render lifecycle 2");
        return (<div>
            <h1>This is App class Component</h1>
            <div className="alert alert-success">
                State username is {this.state.username}
            </div>
            <button onClick={this.updateUsername}>Update Username</button>

            <div className="alert alert-success">
                Props username is {this.props.userProps}
            </div>

            <ProductList products={this.state.products}></ProductList>
            <AddProduct></AddProduct>
            <Star></Star>
            <Title user={this.props.userProps}></Title>
            <Welcome></Welcome>
            <Login></Login>
        </div>
        );
    }
}

export default App;