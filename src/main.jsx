import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

const username = "Harsh AI Academy";
const flowers = ["Rose", "Lily", "Tulip", "Daisy", "Sunflower"];

// without JSX 
const element1 = React.createElement('h1', null, "Hello, " + username + "!");
const element2 = React.createElement('ul', null, flowers.map((flower, index) =>
  React.createElement('li', { key: index }, flower)
));

// with JSX
const element3 = <h1>Hello, {username}!</h1>;
const element4 = <ul>
  {flowers.map((flower, index) => (
    <li key={index}>{flower}</li>
  ))}
</ul>
const element5 = <h1>2 + 2 is {2 + 2} {username} </h1>

createRoot(document.getElementById('root')).render(
  element5
)
