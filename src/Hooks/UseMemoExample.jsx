import React, { useState, useMemo } from "react";

export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(5);

    // WITHOUT useMemo - calculates EVERY render (even when count changes)
    // const factorial = () => {
    // console.log("Calculating factorial...");
    // let result = 1;
    // for (let i = 2; i <= num; i++) {
    // result *= i;
    // }
    // return result;
    // };

    // WITH useMemo - calculates ONLY when num changes
    const factorial = useMemo(() => {
        console.log("Calculating factorial...");
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }, [num]); // Only recalculate when num changes

    return (
        <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
            <h2>useMemo Example</h2>

            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>
                    Increment Count
                </button>
                <p style={{ color: "gray" }}>
                    (Clicking this won't recalculate factorial)
                </p>
            </div>

            <div>
                <h3>Number: {num}</h3>
                <button onClick={() => setNum(num + 1)}>
                    Increment Number
                </button>
                <p style={{ color: "gray" }}>
                    (Clicking this WILL recalculate factorial - check console)
                </p>
            </div>

            <div style={{ backgroundColor: "#e3f2fd", padding: "10px", marginTop: "10px" }}>
                <h4>Factorial of {num} = {factorial}</h4>
            </div>

            <p style={{ fontSize: "12px", color: "gray" }}>
                Open console to see when "Calculating factorial..." is logged
            </p>
        </div>
    );
}