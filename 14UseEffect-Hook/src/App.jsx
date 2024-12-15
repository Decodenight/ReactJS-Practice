/*
useEffect() = React Hook that allows you to perform side effects in functional components. React hook that tells React do some code when (pick one):
      This component re-renders
      This component mouths
      The state of a value

useEffect(function, [dependencies])

1. useEffect(() => {})            // runs after every re-render
2. useEffect(() => {}, [])        // runs only on mount
3. useEffect(() => {}, [value])   // runs on mount + when value changes

usses:
1. Event Listeners
2. Dom manipulation
3. Subscriptions (real-time updates)
4. Ferching data from an API
5. Clean up when a component unmounts

*/

import MyComponent from "./MyComponet"
import MyComponent2 from "./MyComponet2"

function App() {

  return (
    <>
      <MyComponent />
      <hr />
      <MyComponent2 />
    </>
  )
}

export default App
