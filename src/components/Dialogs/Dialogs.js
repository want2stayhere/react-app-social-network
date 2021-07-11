import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classesDialogs from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialog => 
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />); 

    let messageElements = props.state.messages.map(messages => 
        <Message key={messages.id} message={messages.message} />); 

    //ADDMESSAGE
    let newDialogEl = React.createRef();
    let addMesssage =  () => {
        //props.addMessage();
        props.dispatch({type: "ADD-MESSAGE"});
    };
    //CHANGE MESSAGE
    let onMessageChange = () => {
		let text = newDialogEl.current.value;
		//props.updateNewMessageText(text);
        let action = {type: "UPDATE-NEW-MESSAGE-TEXT" , newText: text};
        props.dispatch(action);
	}
    
    return(
        <div className={classesDialogs.dialogs}>
            {/* СПИСОК ДИАЛОГОВ(пользователей) */}
            <div className={classesDialogs.dialogs__list}>
                {dialogElements}
            </div>
            {/* ВЫВОД ДИАЛОГОВ */}
            <div className={classesDialogs.messages}>
                {messageElements}
                <div className={classesDialogs.messages__add}>
                    <textarea ref={newDialogEl} onChange={onMessageChange}  value={props.newMessage} />
                    <button onClick={addMesssage}>Add message</button>
                </div>
            </div>
        </div>	
    )
}

export default Dialogs;