import React from 'react';
class Welcome extends React.Component {
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