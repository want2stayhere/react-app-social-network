import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/state';

import App from './App';



let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter> 
			<App 
				state={state} 
				addPost={store.addPost.bind(store)} 
				addMessage={store.addMessage.bind(store)} 
				updateNewPostText={store.updateNewPostText.bind(store)} 
				updateNewMessageText={store.updateNewMessageText.bind(store)}
			/>
		</BrowserRouter>,document.getElementById('root')
	);
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);