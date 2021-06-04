// Accepting components from other files to be rendered
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// React component that transpiles and renders our application to the DOM via the document API and places the files inside the div with the ID of 'root'
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
