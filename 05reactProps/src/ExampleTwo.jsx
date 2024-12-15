// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// age : PropTypes.number

import PropTypes from "prop-types"; // in node_modules

function Example02(props) {
  const { name = "Guest", age = 0, isStudent = false } = props;

  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
};

// It is a good practice to include propTypes in a component.
Example02.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Example02;
