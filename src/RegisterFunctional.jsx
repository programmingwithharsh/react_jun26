import { useState } from "react";
import axios from "axios";

function RegisterFunctional() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log({ name }); // name is key and name value
        console.log({ value });
        console.log({ formData });

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleRegisterFetch = async (e) => {
        e.preventDefault(); // stop page refresh

        if (formData.password !== formData.confirmPassword) {
            alert("Password does not match");
            return;
        }

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();
            console.log(data);
            alert('Register successful');

        } catch (error) {
            console.log(error);
        }
    }

    const handleRegisterAxios = async () => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData, { timeout: 5000 });
            console.log(response.data);
            alert('Register successful');
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <form onSubmit={handleRegisterFetch}>
            <h1>Register</h1>
            <label>Full name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

            <button type="button" onClick={handleRegisterAxios}>Register with Axios</button>
            <button type="submit">Register</button>
        </form>
    </>);
}

export default RegisterFunctional;