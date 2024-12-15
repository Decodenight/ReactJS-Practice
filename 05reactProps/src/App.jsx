// Props are read-only. They are used to pass data from one component to another.
// <Component key = "value" />

import Example01 from "./ExampleOne.jsx";
import Example02 from "./ExampleTwo.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <Example01 userName="John" post="Developer" ispermanent= {true} />
      <Example01 userName="Rahul" post="Manager"  />
      <Example01 />

      <hr />

      <Example02 name="John" age= {25} isStudent= {true} />
      <Example02 name="Rohan" isStudent= {false} />
      <Example02 />

      <hr />

      <UserGreeting username="John" isLoggedIn= {true} />
      <UserGreeting username="Rohit" isLoggedIn= {false} />
    </>
  );
};

export default App;
