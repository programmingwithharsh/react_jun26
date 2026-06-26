import React, { useState, useCallback } from "react";

// Child component wrapped with React.memo (only re-renders if props change)
const Button = React.memo(({ label, onClick }) => {
    console.log(`Button "${label}" rendered`);
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 15px",
                margin: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );
});

export default function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [callCount, setCallCount] = useState(0);

    // WITH useCallback - returns SAME function reference
    const handleButtonClick = useCallback(() => {
        setCallCount(callCount + 1);
    }, [callCount]); // Recreates function only when callCount changes

    // WITHOUT useCallback (commented) - creates NEW function EVERY render
    // const handleButtonClick = () => {
    // setCallCount(callCount + 1);
    // };

    return (
        <div style={{ border: "2px solid green", padding: "15px", margin: "10px" }}>
            <h2>useCallback Example</h2>

            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>
                    Increment Count
                </button>
                <p style={{ color: "gray" }}>
                    (Clicking this won't re-render the memoized buttons because
                    handleButtonClick stays the same)
                </p>
            </div>

            <div style={{ backgroundColor: "#f3e5f5", padding: "10px", marginTop: "15px" }}>
                <h3>Memoized Buttons:</h3>
                <Button label="Click Me 1" onClick={handleButtonClick} />
                <Button label="Click Me 2" onClick={handleButtonClick} />
                <h4>Button Clicks: {callCount}</h4>
            </div>

            <p style={{ fontSize: "12px", color: "gray", marginTop: "15px" }}>
                Open console to see when buttons re-render. With useCallback, they
                only re-render when callCount changes (when you click them).
            </p>
        </div>
    );
}