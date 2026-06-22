import { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectExample = () => {
    const [users, setUsers] = useState([{ "name": "Anuradha", "address": { "street": "Bangalore" } }, { "name": "Somesh", "address": { "street": "Kolkata" } }]);

    const [data, setData] = useState([{ "name": "Anuradha", "address": { "street": "Bangalore" } }, { "name": "Somesh", "address": { "street": "Kolkata" } }]);

    useEffect(() => {
        console.log("useEffect for fetch");
        fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((data) => {
                console.log("fetch", data);
                setUsers(data); // updating users
            })
    }, []) // effect will run once

    useEffect(() => {
        console.log("useEffect for axios");
        axios.get("http://localhost:3000/")
            .then((response) => {
                console.log("axios", response);
                setData(response.data); // updating users
            })
            .catch(function (error) {
                console.log(error); // handle error
            })
    }, []) // effect will run once

    return (<>
        <h1>Use Effect Example using fetch method</h1>
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.address.street}</li>
            ))}
        </ul>
        <h1>Use Effect Example using axios module</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.address.street}</li>
            ))}
        </ul>
    </>);
}

export default UseEffectExample;