import React, { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [IsEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Rosh");
  };

  const increment = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!IsEmployed);
  };

  return (
    <div className="myComponentContainer">
      <p>Name : {name}</p>
      <button onClick={updateName}> Set Name</button>

      <p>Age : {age}</p>
      <button onClick={increment}> Set Age</button>

      <p>Is Employed : {IsEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}> Set Employed</button>
    </div>
  );
}

export default MyComponent;
