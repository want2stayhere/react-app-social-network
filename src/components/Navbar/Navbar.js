import classesNav from './Navbar.module.css';

// let classesNav = {
//     'nav' : 'nav',
//     'item' : 'nav__link',
// }
//console.log(classesNav);

const Navbar = () => {
    return(
        <nav className={classesNav.nav}>
            <a href="/test" className={classesNav.nav__link}>
                Profile
            </a>
            <a href="/test" className={classesNav.nav__link}>
                Messages
            </a>
            <a href="/test" className={classesNav.nav__link}>
                News
            </a>
            <a href="/test" className={classesNav.nav__link}>
                Musik
            </a>
            <br/>
            <a href="/test" className={classesNav.nav__link}>
                Settings
            </a>
        </nav>
    )
}

export default Navbar;