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
import TabsController from "./Components/RouteTabs/TbasController";
import { ROUTES } from "./routes/config";
import "./styles/custom-table.css";
// import CompanyDetails from "./Components/widget/CompanyDetails";

function App() {
  useEffect(() => {
    document.title = "Securecy";
  }, []);

  return (
    <SidebarProvider>
      <BrowserRouter basename="/securecy_dashboard">
        <TabsController />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            {ROUTES.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route
              path="/details/switchtodetails"
              element={<SwitchToDetails />}
            />
            {/* <Route path="/company-details" element={<CompanyDetails />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
