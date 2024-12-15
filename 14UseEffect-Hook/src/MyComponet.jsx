import React, { useState, useEffect } from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Clicked ${count} ${color} times`;
    }, [count]);

    function addCount() {
        setCount(count + 1);
    }
    function subtractCount() {
        setCount(count - 1);
    }

    function ChangeColor() {
        setColor(color === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={ChangeColor}>Change Color</button>
        </>
    )
}

export default MyComponent