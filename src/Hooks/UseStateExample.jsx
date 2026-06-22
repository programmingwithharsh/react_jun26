import { useState, useEffect } from 'react';

function UseStateExample() {
    const [name, setName] = useState("Anuradha"); // defualt name is Anuradha
    /*
        name -> current state value
        setName -> Function used to update the state
        "Anuradha" is the initial value

        A normal variable does not trigger a rerender when its value changes, while useState updates the UI by rerendering when state changes.

    */

    useEffect(() => {
        console.log("useEffect");
        // setName("Neha"); // to update state
    }, [])

    return (<>
        <div className="alert alert-success">
            State name is {name}
        </div>
        <button onClick={() => setName("Neha")}>Update name</button>
    </>);
}

export default UseStateExample;