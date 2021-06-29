import classesNav from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classesNav.nav}>
            <a href="/profile" className={classesNav.nav__link}>
                Profile
            </a>
            <a href="/dialogs" className={`${classesNav.nav__link} ${classesNav.active}`}>
                Messages
            </a>
            <a href="/news" className={classesNav.nav__link}>
                News
            </a>
            <a href="/musik" className={classesNav.nav__link}>
                Musik
            </a>
            <br/>
            <a href="/settings" className={classesNav.nav__link}>
                Settings
            </a>
        </nav>
    )
}

export default Navbar;