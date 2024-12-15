import React, { useState } from "react";

function MyComponent() {

    const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);

    function addFruit() {
        const newFruits = document.getElementById("addFruit").value;
        document.getElementById("addFruit").value = "" ; //  to clear the input field

        setFruits(fruits => [...fruits, newFruits]); // is for copying the existing array and adding the new fruit to the array
    }

    function removeFruit( index ) {
        // setFruits(fruits => fruits.slice(0, fruits.length - 1)); // to remove the last item from the array
        
        setFruits(fruits => fruits.filter((_, i) => i !== index)); //_ is for the element, i is for the index
    }

    return (
        <div>
            <h1>List of Fruits</h1>
            <ul>
                {fruits.map((fruits, index) => 
                <li key={index} onClick={() => removeFruit(index)}>
                    {fruits}</li>)}
            </ul>
            <input type="text" id = "addFruit"  placeholder="Add Fruits" />
            <button  onClick={addFruit}>Add</button>
            {/* <button onClick={removeFruit}>Remove</button> */}
        </div> 
    );
}

export default MyComponent