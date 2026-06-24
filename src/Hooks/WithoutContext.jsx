import { useState } from 'react';

const WithoutContext = () => {
    const [username, setUsername] = useState("Somesh"); // username is Somesh

    return (<>
        <h1>Without Context</h1>
        <h2>In Component 1, Username is {username}</h2>
        <C2 username={username} />
    </>);
}

const C2 = (props) => {
    return (<>
        <C3 username={props.username} />
    </>);
}

const C3 = (props) => {
    return (<>
        <C4 username={props.username} />
    </>);
}

const C4 = (props) => {
    return (<>
        <C5 username={props.username} />
    </>);
}

const C5 = (props) => {
    return (<>
        <div>In Component 5, username is {props.username}</div>
    </>);
}

export default WithoutContext;