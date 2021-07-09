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
        let text = newDialogEl.current.value;
        props.addMessage(text);
        newDialogEl.current.value = "";
    };
    
    return(
        <div className={classesDialogs.dialogs}>
            <div className={classesDialogs.dialogs__list}>
                {dialogElements}
            </div>

            <div className={classesDialogs.messages}>
                {messageElements}
                <div className={classesDialogs.messages__add}>
                    <textarea ref={newDialogEl}></textarea>
                    <button onClick={addMesssage}>Add messsage</button>
                </div>
            </div>
        </div>	
    )
}

export default Dialogs;