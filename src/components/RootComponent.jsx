import NavigationBar from "./NavBar";
import { Outlet } from "react-router-dom";

function RootComponent() {
  return (
    <div
      style={{
        backgroundColor: "var(--bs-gray-200)",
        minHeight: "100vh",
        width: "100%",
      }} className="container-fluid p-0"
    >
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default RootComponent;
