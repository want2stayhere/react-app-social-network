import classesNav from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={classesNav.nav}>
            <NavLink to="/profile" className={classesNav.nav__link} activeClassName={classesNav.active}>
                Profile
            </NavLink>
            <NavLink to="/dialogs" className={classesNav.nav__link} activeClassName={classesNav.active}>
                Messages
            </NavLink>
            <NavLink to="/news" className={classesNav.nav__link} activeClassName={classesNav.active}>
                News
            </NavLink>
            <NavLink to="/musik" className={classesNav.nav__link} activeClassName={classesNav.active}>
                Musik
            </NavLink>
            <br/>
            <NavLink to="/settings" className={classesNav.nav__link} activeClassName={classesNav.active}>
                Settings
            </NavLink>
        </nav>
    )
}

export default Navbar;