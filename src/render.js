import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {addPost} from './redux/state';
import {addMessage} from './redux/state';



export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state = {state} addPost={addPost} addMessage={addMessage}/>
		</BrowserRouter>,document.getElementById('root')
	);
}