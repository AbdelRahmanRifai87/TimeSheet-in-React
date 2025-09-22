import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from "../Context/SidebarContext";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const { menuPages } = useSidebarContext();

  // Function to build the breadcrumb path
  const getBreadcrumbItems = () => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter((segment) => segment);

    if (pathSegments.length === 0) {
      return [{ name: "Dashboard", path: "/dashboard", isActive: true }];
    }

    const breadcrumbItems = [];
    let currentPathBuilder = "";

    // Build the breadcrumb based on the current path
    for (let i = 0; i < pathSegments.length; i++) {
      currentPathBuilder += `/${pathSegments[i]}`;

      // Find the page that matches this path segment
      const matchingPage = menuPages.find(
        (page) =>
          page.path === currentPathBuilder ||
          page.path.endsWith(pathSegments[i])
      );

      if (matchingPage) {
        breadcrumbItems.push({
          name: matchingPage.name,
          path: matchingPage.path,
          isActive: i === pathSegments.length - 1,
        });
      }
    }

    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav className="breadcrumb ml-3 text-sm mb-4">
      <ol className="flex items-center">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <li className={`${item.isActive ? "font-bold" : ""}`}>
              {item.isActive ? (
                <span className="text-[#1C75BC]">{item.name}</span>
              ) : (
                <Link to={item.path} className="text-[#1C75BC] hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
            {/* Add the › symbol after the active item */}
            {item.isActive && (
              <li className="mx-2 text-[#1C75BC]">
                <span>›</span>
              </li>
            )}
            {/* Keep the separator between items that aren't the active one */}
            {!item.isActive && index < breadcrumbItems.length - 1 && (
              <li className="mx-2 text-[#1C75BC]">
                <span>›</span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
