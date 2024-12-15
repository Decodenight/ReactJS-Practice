import React, { useState, useEffect } from "react";

function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

    }, []);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
}

export default MyComponent2


