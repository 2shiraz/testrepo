import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNav.module.css';
function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetup</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}

export default MainNav;
