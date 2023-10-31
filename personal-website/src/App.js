// App.js
import React from "react";
import HomePage from "./components/pages/HomePage.js";
import Portfolio from "./components/pages/Portfolio.js";
import Courses from "./components/pages/Courses.js";
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Portfolio />
      <Courses />
    </div>
  );
};

export default App;
