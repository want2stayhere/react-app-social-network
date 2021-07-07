import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="layout">
				<Header />
				<Navbar state={props.state.sidebar}/>
				<div className="content">
					<Route path="/profile" 
						render={ () => <Profile state={props.state.profilePage}/>} />
					<Route path="/dialogs" 
						render={ () => <Dialogs state={props.state.dialogsPage} /> } /> {/* exact */}
					<Route path="/news" 
						component={News} />
					<Route path="/musik" 
						render={() => <Musik /> } />
					<Route path="/settings" 
						component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}




export default App;
