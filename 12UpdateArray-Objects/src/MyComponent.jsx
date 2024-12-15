import React, { useState } from 'react'

const MyComponent = () => {
    const [cars, setCars] = useState([]);
    const [carsYear, setCarsYear] = useState(new Date().getFullYear()); //Remember
    const [carsMake, setCarsMake] = useState("");
    const [carsModel, setCarsModel] = useState("");

    function addCar() {
        const newCar = {year : carsYear, make : carsMake, model : carsModel};
        setCars(c => [...c, newCar]); //Remember

        setCarsYear(new Date().getFullYear());
        setCarsMake(""); // Remember
        setCarsModel("");
    }

    function removeCar(index) {
        setCars(c => c.filter((_, i) => i !== index)); //Remember
    }

    function updateCarYear(event) {
        setCarsYear(event.target.value); //Remember
    }   

    function updateCarMake(event) {
        setCarsMake(event.target.value);
    }   

    function updateCarModel(event) { 
        setCarsModel(event.target.value);
    }

    return (
        <div>
            <h1>My Cars</h1>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => removeCar(index)}> {/*Remember*/}
                    {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" value={carsYear} onChange={updateCarYear} /><br />
            <input type="text" value={carsMake} onChange={updateCarMake} placeholder='Enter car make' /><br />
            <input type="text" value={carsModel} onChange={updateCarModel} placeholder='Enter car model' /><br />
            <button onClick={addCar}>Add Car</button>
        </div>
    );

}

export default MyComponent