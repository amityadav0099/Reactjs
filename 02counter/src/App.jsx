// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [counter, setCounter] = useState(23)
 

//   // let counter = 5
//   const addValue = () => {
//     counter = counter+1;
//     console.log("Value added",counter);
//     setCounter(counter)
//   }

//   const removeValue = () =>{
//     counter -= 1;
//     console.log("value removed",counter)
//     setCounter(counter)
//   }
//   return (
//   <>
//     <h1>hi I'm amit</h1>
//     <h2>counter value : {counter}</h2>

//     <button
//     onClick={addValue}
//     >Add Value{counter+1}</button>
   
// <br />
// <button
// onClick={removeValue}
// >remove value{counter}</button>
//   </>
//   )
// }

// export default App


import React, { useState } from 'react';

function App() {
  // State to manage the counter value
  const [counter, setCounter] = useState(23);
  // State to manage the button texts
  const [addButtonText, setAddButtonText] = useState(`Add Value ${counter}`);
  const [removeButtonText, setRemoveButtonText] = useState(`Remove Value ${counter}`);

  const addValue = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setAddButtonText(`Add Value ${newCounter}`);
  };

  const removeValue = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    setRemoveButtonText(`Remove Value ${newCounter}`);
  };

  return (
    <>
      <h1>Hi, I'm Amit</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        {addButtonText}
      </button>
      
      <br />
      <button onClick={removeValue}>
        {removeButtonText}
      </button>
    </>
  );
}

export default App;


