import classesDialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={classesDialogs.dialogs__item}>
            <NavLink to={'/dialogs/' + props.id} className={classesDialogs.dialogs__link}>
                <div className={classesDialogs.dialogs__img}>
                    <img src="https://img.icons8.com/officel/2x/person-male.png" alt="avatar"/>
                </div>
                <div className={classesDialogs.dialogs__name}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;