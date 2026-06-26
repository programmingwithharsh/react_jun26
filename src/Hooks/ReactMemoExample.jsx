import React, { useState, memo } from "react";

// Memoized Child Component
const ReactMemoExampleChild = memo(({ count }) => {
    console.log("Child rendered");

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <h3>Child Component</h3>
            <p>Count value: {count}</p>
        </div>
    );
});

// Parent Component
const ReactMemoExample = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Harsh");

    return (
        <div style={{ padding: "20px" }}>
            <h2>React.memo Example</h2>

            {/* Update count */}
            <button onClick={() => setCount(count + 1)}>
                Increment Count ({count})
            </button>

            {/* Update text */}
            <br /><br />
            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* Memoized Child */}
            <ReactMemoExampleChild count={count} />
        </div>
    );
};

export default ReactMemoExample;