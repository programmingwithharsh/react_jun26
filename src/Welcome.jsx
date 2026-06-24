import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Anuradha"
        }

        localStorage.setItem("username", "Dheeraj"); // string
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("user", JSON.stringify({ id: 1, name: "Pooja" })); // object
        localStorage.setItem("users", JSON.stringify([{ id: 1, name: "Pooja" }, { id: 2, name: "Neha" }])); // array of object
        localStorage.setItem("flowers", ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]);

        let user = JSON.parse(localStorage.getItem("user"));
        let users = JSON.parse(localStorage.getItem("users"));

        /*
        console.log(typeof localStorage.getItem("username"));
        console.log(typeof localStorage.getItem("active"));
        console.log(typeof user);
        console.log(typeof localStorage.getItem("flowers"));
        */

        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("active"));
        console.log(user);
        console.log(users);
        console.log(localStorage.getItem("flowers"));
    }


    updateUsername = () => {
        this.setState({
            username: "Neha"
        })
    }

    render() {
        let myStyle = { color: 'white', backgroundColor: 'green' };
        return (<div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{ color: 'white', backgroundColor: 'blue' }}>This is Welcome class Component</h1>
            <h1 style={myStyle}>Another header with CSS</h1>
            <div className="alert alert-success">
                State username is {this.state.username}
            </div>
            <button onClick={this.updateUsername}>Update Username</button>

            <div className="alert alert-success">
                Props username is {this.props.userProps}
            </div>


            <h1>Welcome to Users Module</h1>
            <p>Existing users</p>
            <Link className="btn btn-outline-secondary" to="/login">Login</Link>
            <p>New Users</p>
            <Link className="btn btn-outline-secondary" to="/register">Register</Link>
        </div>
        );
    }
}

export default Welcome;