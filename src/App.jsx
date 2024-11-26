import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserPage from "./Components/User Page/User-Page";
import AddUser from "./Components/Add User/Add-User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/AddUser" element={<AddUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;