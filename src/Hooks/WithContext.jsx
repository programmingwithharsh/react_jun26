import { useState, createContext, useContext } from "react";

const userContext = createContext(); // create context

const WithContext = () => {
    const [username, setUsername] = useState("Somesh"); // username is Somesh

    return (<>
        <h1>With Context</h1>
        <h2>In Component 1, Username is {username}</h2>
        <userContext.Provider value={{ username, setUsername }}>
            <C2 />
        </userContext.Provider>
    </>);
}

const C2 = () => {
    return (<>
        <C3 />
    </>);
}

const C3 = () => {
    return (<>
        <C4 />
    </>);
}

const C4 = () => {
    return (<>
        <C5 />
    </>);
}

const C5 = () => {
    const { username, setUsername } = useContext(userContext);
    // username = "Harsh"; // this will not work
    setUsername("Anuradha");
    return (<>
        <div>In Component 5, username is {username}</div>
    </>);
}

export default WithContext;