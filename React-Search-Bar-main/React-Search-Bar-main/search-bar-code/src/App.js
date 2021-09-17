import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Data10 from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search user by id, name, address, items..." data={Data10}  />
    </div>
  );
}

export default App;
