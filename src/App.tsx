import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Components/AppLayout";


function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("App component mounted", count);
    document.title = "Partisan Protective Services";
  }, []);
  return (
    <>
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;
