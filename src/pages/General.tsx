import { useState } from "react";
import "react-grid-layout/css/styles.css";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
// import { DataList } from "../Components/DataList";
import Breadcrumb from "../Components/BreadCrumb";
import { useOutletContext } from "react-router-dom";
type ContextType = { isDarkMode: boolean };

function General() {
  return (
    // <iframe
    //   className="w-full h-full"
    //   src="https://www.google.com/maps"
    //   sandbox=""
    // ></iframe>
    <iframe
      src="https://www.securecy.com.au/dashboard.php"
      loading="lazy"
      className="w-full min-h-[90vh] "
    ></iframe>
  );
}
export default General;
