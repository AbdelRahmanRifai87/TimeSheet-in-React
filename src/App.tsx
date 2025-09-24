import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Components/AppLayout";
import { SidebarProvider } from "./Context/SidebarContext";
import Details from "./pages/Details";
import General from "./pages/General";
import SwitchToDetails from "./pages/SwitchToDetails";
import TaskManager from "./pages/TaskManager";
import Users from "./pages/Users";

function App() {
  useEffect(() => {
    document.title = "Partisan Protective Services";
  }, []);

  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/general" element={<General />} />
            <Route path="/tasks-manager" element={<TaskManager />} />
            <Route path="/users" element={<Users />} />
            <Route
              path="/details/switchtodetails"
              element={<SwitchToDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
