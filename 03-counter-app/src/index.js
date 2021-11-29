import React from "react";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CountApp";
import ReactDOM from "react-dom";
import './index.css';

// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value={10}/>, divRoot);