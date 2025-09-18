import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("App component mounted", count);
    document.title = "Partisan Protective Services";
  }, []);
  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
