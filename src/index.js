import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import $ from "jquery";

$(function() {
  $(".tabRow div").on("click", function() {
    $(".tabRow div.active").removeClass("active");
    $(this).addClass("active");
  });
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

const animal = document.getElementById("animal");
const einstein = document.getElementById("einstein");
const random1 = document.getElementById("random1");
animal.setAttribute("checked", "checked");
einstein.setAttribute("checked", "checked");
random1.setAttribute("checked", "checked");
