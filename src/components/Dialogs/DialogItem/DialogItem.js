import classesDialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={classesDialogs.dialogs__item}>
            <NavLink to={'/dialogs/' + props.id} className={classesDialogs.dialogs__link}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;