import classesHeader from './Header.module.css';

const Header = () => {
    return(
        <header className={classesHeader.header}>
            <div className={classesHeader.header__logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcINdBzfZWi2epwqNV2FGLxGlLjcGQ_ZFf9A&usqp=CAU" alt="Logo"/>
            </div>
        </header>
    )
}

export default Header;