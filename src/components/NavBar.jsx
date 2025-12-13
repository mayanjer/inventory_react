

import classes from './NavBar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  return (
    <nav className={classes.navbarContainer}>
      <div className={classes.navbarContent}>
        <a href="#main-menu" className={classes.navbarBrand}>
          <i className="bi bi-columns-gap"></i>&nbsp;Main Menu
        </a>
        <div className={classes.navLinks}>
          <a href="/inventory" className={classes.navLink}>
            <i className="bi bi-shop"></i>&nbsp;Inventory
          </a>
          <a href="#stock" className={classes.navLink}>
            <i className="bi bi-columns-gap"></i>&nbsp;Stock
          </a>
          <a href="#pricing" className={classes.navLink}>
            <i className="bi bi-coin"></i>&nbsp;Finance
          </a>
          <a href="#user-management" className={classes.navLink}>
            <i className="bi bi-kanban-fill"></i>&nbsp;User Management
          </a>
          <a href="#report" className={classes.navLink}>
            <i className="bi bi-flag"></i>&nbsp;Report
          </a>
          <a href="#settings" className={classes.navLink}>
            <i className="bi bi-gear"></i>&nbsp;Settings
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
