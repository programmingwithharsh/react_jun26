import { useState, useEffect } from 'react';

const UseEffectExample2 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count changed:', count)
    }, [count]) // depedency

    return (<>
        <h1>Use Effect Example using fetch method</h1>
        <div>
            <h2>Count is {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    </>);
}

export default UseEffectExample2;