import React from "react";
import axios from "axios";
class RegisterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => { // Arrow function
        debugger;
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = async (e) => {
        e.preventDefault(); // stop page refresh
        if (this.state.password !== this.state.confirmPassword) {
            alert("Password does not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/", this.state, { timeout: 5000 });
            console.log(response.data);
            alert('Register successful');
            // Reset Form
            this.setState({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log("Render lifecycle", this.state);
        return (<form onSubmit={this.handleRegister}>
            <h1>Register</h1>
            <label>Full name</label>
            <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />

            <button type="submit">Register</button>
        </form>);
    }
}

export default RegisterClass;