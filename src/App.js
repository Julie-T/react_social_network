import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
              <Route exact path="/dialogs" element={<DialogsContainer/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path = "/users" element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
