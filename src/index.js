import React from "react";
import ReactDOM  from "react-dom";
import App from "./Profile"
import Navigation from "./Navigation"
import Contact from "./Contact"
import Services from "./Services"
import Slider from "./Slider"

ReactDOM.render(<Slider/>,document.getElementById("instruction"));
ReactDOM.render(<App/>,document.getElementById("team"));
ReactDOM.render(<Navigation/>,document.getElementById("nav"));
ReactDOM.render(<Contact/>,document.getElementById("contact"));
ReactDOM.render(<Services/>,document.getElementById("service"));




