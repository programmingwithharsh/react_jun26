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

        // Simple interceptor example: log outgoing requests and incoming responses.
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                console.log("[axios request]", config.method?.toUpperCase(), config.url);
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                console.log("[axios response]", response.status, response.config?.url);
                return response;
            },
            (error) => {
                console.log("[axios response error]", error?.message);
                return Promise.reject(error);
            }
        );

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log("axios", response);
                setData(response.data); // updating users
            })
            .catch(function (error) {
                console.log(error); // handle error
            })

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
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