import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
	{id: 1, message: "Hi, how are you", like: 19,},
	{id: 2, message: "How is your name?", like: 45},
	{id: 3, message: "Hello, World!", like: 1},
];

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


ReactDOM.render(
	<App posts={posts} dialogs={dialogs} messages={messages}/>,
	document.getElementById('root')
);
