let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", like: 19,},
            {id: 2, message: "How is your name?", like: 45},
            {id: 3, message: "Hello, World!", like: 1},
            {id: 4, message: "Thanks, Hello World too!", like: 111},
        ],
        
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your name?"},
            {id: 3, message: "Hello, World!"},
            {id: 4, message: "Thanks, Hello World too!", like: 111},
        ],
        dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Valera"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Victor"},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: "Vova",},
            {id: 2, name: "Alex",},
            {id: 3, name: "Ivan",},
        ],
        
    },
}

export default state;