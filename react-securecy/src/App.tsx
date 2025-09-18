import React from "react";
import TopBar from "./components/TopBar"; //

function App() {
  return (
    <div>
      <TopBar
        userName="Mohamad Zakaria"
        companyName="Partisan Protective Services"
        userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
      />
    </div>
  );
}

export default App;
