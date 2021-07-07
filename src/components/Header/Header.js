import classesHeader from './Header.module.css';

const Header = () => {
    return(
        <header className={classesHeader.header}>
            <div className={classesHeader.header__logo}>
                <img src="https://www.graphicsprings.com/filestorage/stencils/c78e92c13913b01cbd911f2af49ac982.png?width=58&height=58" alt="Logo"/>
            </div>
            <div className={classesHeader.header__msg}>
                SocialWeek
            </div>
        </header>
    )
}

export default Header;