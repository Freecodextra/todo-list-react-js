import React from "react";
import AddButton from "./addButton/AddButton";
import "./App.css";
import Complete from "./complete/Complete";
import TodoProvider from "./context/TodoContext";
import Header from "./header/Header.jsx";
import Lists from "./lists/Lists";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="App">
          <Header />
          <Lists />
          <Complete />
          <AddButton />
        </div>
      </TodoProvider>
    </>
  );
}
export default App;
