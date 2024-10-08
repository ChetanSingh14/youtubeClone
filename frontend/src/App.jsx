import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/authorization/SignUp";
import Filter from "./Component/filter/Filter";
import Navbar from "./Component/navbar/Navbar";
import SideBar from "./Component/sidebar/SideBar";

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
