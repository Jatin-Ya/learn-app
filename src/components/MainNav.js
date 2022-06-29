import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';


function MainNav () {

    return (
    <header className={classes.header}>
        <div className={classes.logo}>Learn-App</div>
        <nav>
            <ul>
                
                <li>
                    <Link to='/'>Every One</Link></li>
                <li><Link to='/Favorites'>Favorites</Link></li>
                <li><Link to='/AddFav'>Add Favorites</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNav;