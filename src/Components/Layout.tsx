import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex", margin: "-8px", padding: 0 }}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
