import SimpleCounter from "./components/SimpleCounter";
import IncDecCounter from "./components/IncDecCounter";
import Toggle from "./components/Toggle";
import Todo from "./components/Todo";
import Child from "./components/Child";
import { useState } from "react";
function App() {
  const [data,setData]=useState("Madhav");
  return (
    <div>
      <div>
        <h1>Create a counter component with a button.</h1>
        <SimpleCounter/>
      </div>
      <div>
        <h1>Create a counter with increment and decrement buttons.</h1>
        <IncDecCounter/>
      </div>
      <div>
        <h1>
          Create a parent() component that has a message in its state.
        </h1>
        <p>In this question state is defined in parent component and props are passed to child component and child component is rendered here</p>
        <Child data={data}/>
      </div>
      <div>
        <h1>Create a TodoList component that stores a list of to-dos in its state.</h1>
        <Todo/>
      </div>
      <div>
        <h1>Create a component that toggles between two views: "Login" and "Logout".</h1>
        <Toggle/>
      </div>
    </div>
  );
}

export default App;
