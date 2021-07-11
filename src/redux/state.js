//import {getRerender} from '../render';
let getRerender = () => {
    console.log('State changed');
};

let state = {
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
}

export let addPost = () =>{
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    getRerender(state);
}

export const addMessage = () =>{
    let newMessage = {
        id:5,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    getRerender(state);
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    getRerender(state);
    //console.log(state.profilePage.newPostText)
}
export const updateNewMessageText = (newText) =>{
    state.dialogsPage.newMessageText = newText;
    getRerender(state);
    //console.log(state.profilePage.newMessage)
}

export const subscribe = (observer) => {
    getRerender = observer;
}

export default state;