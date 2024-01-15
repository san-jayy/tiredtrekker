import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
ReactDOM.render(
  <App></App>,

  document.getElementById("root")
);

{
  /* <BrowserRouter>
<App />
</BrowserRouter>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/stories" element={<Stories />} />
<Route path="/destinations" element={<Destinations />} />
<Route path="/contacts" element={<Contact />} />
<Route path="/gallery" element={<Gallery />} />
</Routes> */
}
