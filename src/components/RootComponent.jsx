import NavigationBar from "./NavBar";
import { Outlet } from "react-router-dom";

function RootComponent() {
  return (
    <div className="bg-light min-vh-100 w-100">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default RootComponent;
