import NavigationBar from "./NavBar";
import { Outlet } from "react-router-dom";

function RootComponent() {
  return (
      <div >
      <NavigationBar />
      <Outlet/>

    </div>
        
  );
}

export default RootComponent;
