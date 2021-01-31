import React, { Component, Hooks } from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

function Example() {
  // Declarar uma nova variável de state, na qual chamaremos de "items"
  const [items, setItems] = useState([]);
  const addMoreItem = () => {
    setItems(prevItems => [...prevItems, { //de cada elemento prevItems
      id: prevItems.length,
      value: 90
    }]);
    //console.log(items);
    return items
  }

  return (addMoreItem
    
    //<div>
      //<button onClick={addMoreItem}>
        //Click me
      //</button>
    //</div>
  );
}

export default Example;
