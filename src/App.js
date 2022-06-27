import React from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Login from "./LoginPage/Login";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};
export default App;
