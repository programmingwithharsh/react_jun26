import { useRef } from "react";

function UnControlledExample() {

    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = () => {
        const username = nameRef.current.value;
        const password = passwordRef.current.value;

        alert(`username is ${username} and password is ${password}`);
        nameRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (<>
        <h1>UnControlled Component</h1>
        <input type="text" ref={nameRef} placeholder="Enter username" />
        <input type="password" ref={passwordRef} placeholder="Enter password" />
        <button className="bt btn-primary" onClick={handleSubmit}>Login</button>
    </>);
}

export default UnControlledExample;