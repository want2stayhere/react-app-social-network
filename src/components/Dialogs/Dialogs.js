import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classesDialogs from './Dialogs.module.css';




const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Victor"},
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your name?"},
        {id: 3, message: "Hello, World!"},
    ];

    let dialogElements = dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />); 

    let messageElements = messages.map(messages => <Message key={messages.id} message={messages.message} />); 
    
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