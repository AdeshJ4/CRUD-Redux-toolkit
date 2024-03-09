import React from "react";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
