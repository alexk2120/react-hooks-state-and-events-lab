import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false) 
  
    function handleDarkModeClick() {
  setIsDarkMode(!isDarkMode);
  }


return (
  
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} mode={isDarkMode}/>
        <ShoppingList items={itemData} />
  </div>
  );
}

export default App;
