import state, { subscribe } from './redux/state';
//import {rerenderEntireTree} from './render';


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {addPost, addMessage, updateNewPostText, updateNewMessageText } from './redux/state';


let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter> 
			<App 
				state={state} 
				addPost={addPost} 
				addMessage={addMessage} 
				updateNewPostText={updateNewPostText} 
				updateNewMessageText={updateNewMessageText}
			/>
		</BrowserRouter>,document.getElementById('root')
	);
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);