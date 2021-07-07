import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classesDialogs from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialog => 
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />); 

    let messageElements = props.state.messages.map(messages => 
        <Message key={messages.id} message={messages.message} />); 
    
    return(
        <div className={classesDialogs.dialogs}>
            <div className={classesDialogs.dialogs__list}>
                {dialogElements}
            </div>

            <div className={classesDialogs.messages}>
                {messageElements}
            </div>
        </div>	
    )
}

export default Dialogs;