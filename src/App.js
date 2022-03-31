/* -> Aprendendo sobre useState.

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const backIncrementCount = () => {
    if (count - 1 >= 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={backIncrementCount}>Increment</button>
    </div>
  );
};

export default App;

// ----------------------------------------------------------------------------------------------------------------------

/* -> Aprendendo sobre useEffect.

import { useState, useEffect } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typeicode.com/${resourceType}`
      );
      const responseJSON = await response.json();

      console.log(responseJSON);
    };

    fetchResourceTypes();
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
};

export default App;

*/

// ----------------------------------------------------------------------------------------------------------------------

/* -> Aprendendo sobre useRef.

import { useEffect, useState, useRef } from "react";

const App = () => {
  const [name, setName] = useState("");

  const previousName = useRef();

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! My name is {name}</p>
      <p>And my name was {previousName.current}</p>
    </div>
  );
};

export default App;

*/

// -> Aprendendo sobre useReducer

// import { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-task":
//       return {
//         tasks: [
//           ...state.tasks,
//           { name: action.inputValue, isCompleted: false },
//         ],
//       };
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, { counter: 0 });

//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={() => dispatch({ type: "add-task", inputValue })}>
//         Adicionar
//       </button>

//       {state.tasks.map((task) => (
//         <p>{task.name}</p>
//       ))}
//     </div>
//   );
// };

// export default App;
