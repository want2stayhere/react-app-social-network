import classesDialogs from './../Dialogs.module.css';


const Message = (props) => {
    return(
        <div className={classesDialogs.messages__item}>
            <div className={classesDialogs.messages__icon}></div>
            <div className={classesDialogs.messages__txt}>
                {props.message}
            </div>
        </div>
    )
}



export default Message;