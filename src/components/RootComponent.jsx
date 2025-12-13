import NavBar from "./NavBar";
import classes from "../components/RootComponent.module.css";
function RootComponent() {
  return (
    <>
      <div className={classes}>
        <NavBar />
      </div>
    </>
  );
}

export default RootComponent;
