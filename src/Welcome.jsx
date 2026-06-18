import React from 'react';
class Welcome extends React.Component {

    constructor() {
        super();

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
    render() {
        return (<div>
            <h1>Welcome to Users Module</h1>
            <p>Existing users</p>
            <button className='btn btn-outline-secondary'>Login</button>
            <p>New Users</p>
            <button className='btn btn-outline-secondary'>Register</button>
        </div>
        );
    }
}

export default Welcome;