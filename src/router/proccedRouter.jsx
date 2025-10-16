import React from "react";
import { Routes, Route } from "react-router";
import HomeUser from "../components/userDashboard/homepage";

export default function ProccedRouter() {
  return (
    <>
      <Routes>
        <Route path="/user_dashboard" element={<HomeUser />}></Route>
      </Routes>
    </>
  );
}
