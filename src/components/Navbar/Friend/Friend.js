// import { NavLink } from 'react-router-dom';
import classesNav from '../Navbar.module.css';

const Friend = (props) => {
    
    return(
        // <NavLink to={props.name} className={classesNav.friends__item}>
        <div className={classesNav.friends__item}>
            <div className={classesNav.friends__icon}></div>
            <div className={classesNav.friends__name}>
                {props.name}
            </div>
        </div>
    )
}
export default Friend;