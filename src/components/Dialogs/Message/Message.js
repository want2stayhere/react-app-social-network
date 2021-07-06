import classesDialogs from './../Dialogs.module.css';


const Message = (props) => {
    return(
        <div className={classesDialogs.messages__item}>
            {props.message}
        </div>
    )
}



export default Message;