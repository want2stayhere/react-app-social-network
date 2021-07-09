import classesNav from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
    
    let friendElements = props.state.friends.map(item => 
        <Friend key={item.id} name={item.name} />); 
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
            <div className={classesNav.friends}>
                <h3>Friends</h3>  
                <div className={classesNav.friends__list}>
                    {friendElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;