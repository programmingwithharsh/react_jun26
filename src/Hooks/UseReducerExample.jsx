import { useReducer } from "react";

const reducerFn = (state, action) => { // update state based on action
    switch (action) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}

const UseReducerExample = () => { // Arrow function
    const [count, dispatch] = useReducer(reducerFn, 0); // intial value is 0
    return (<>
        <h1>Use Reducer Hook</h1>
        <h2>Count is {count}</h2>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>);
}

export default UseReducerExample;