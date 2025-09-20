import { useState } from "react";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./Components/AppLayout";

function App() {
  return (
    <div>
      <AppLayout />

      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Navigate replace to="dashboard" />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
