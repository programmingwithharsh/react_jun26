import { useState } from "react";

function RegisterFunctional() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = () => {

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>Full name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />

            <label>Confirm Password</label>
            <input type="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

            <button type="submit">Register</button>
        </form>
    </>);
}

export default RegisterFunctional;