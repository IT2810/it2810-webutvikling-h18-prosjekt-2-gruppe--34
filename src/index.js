import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

const animal = document.getElementById("animal");
const einstein = document.getElementById("einstein");
const random1 = document.getElementById("random1");
animal.setAttribute("checked", "checked");
einstein.setAttribute("checked", "checked");
random1.setAttribute("checked", "checked");
