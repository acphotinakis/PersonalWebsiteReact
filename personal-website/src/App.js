import React from "react";
import HomePage from "./components/pages/HomePage.js";
import Portfolio from "./components/pages/Portfolio.js";


const App = () => {
  return (
    <div className="App"> {/* Add the App class to the main div */}
      <HomePage />
      <Portfolio />
    </div>
  );
};

export default App;
