let store = {
    
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", like: 19,},
                {id: 2, message: "How is your name?", like: 45},
                {id: 3, message: "Hello, World!", like: 1},
                {id: 4, message: "Thanks, Hello World too!", like: 111},
            ],
            newPostText: "",
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your name?"},
                {id: 3, message: "Hello, World!"},
                {id: 4, message: "Thanks, Hello World too!"},
            ],
            dialogs: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Dima"},
                {id: 5, name: "Victor"},
            ],
            newMessageText: "dfd",
        },
        sidebar: {
            friends: [
                {id: 1, name: "Vova",},
                {id: 2, name: "Alex",},
                {id: 3, name: "Ivan",},
            ],
            
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id:5,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
    
};

export default store;
window.store = store;