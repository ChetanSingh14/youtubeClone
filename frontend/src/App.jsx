import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Component/sidebar/SideBar";
import SignUp from "./Component/authorization/SignUp";
import Filter from "./Component/filter/Filter";
import Navbar from "./Component/navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Filter className="filter" />
      <SideBar className="sidebar" />
      <Routes>
        <Route path="/auth" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
