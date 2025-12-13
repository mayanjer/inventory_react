import RootComponent from "./RootComponent"
import classes from '../components/NavBar.module.css'
function MainPage() {
    return (
      <>
        <div className={classes}>
          <RootComponent />
        </div>
      </>
    );
}



export default MainPage