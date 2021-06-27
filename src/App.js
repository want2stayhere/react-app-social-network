import './App.css';

import Header from './components/Header/Header';
import './components/Header/Header.css';

import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';

import Profile from './components/Profile';
import './components/Profile/Profile.css';


const App = () => {
	return (
		<div className="layout">
			<Header />
			<Navbar />
			<Profile />
			{/* <footer></footer>	 */}
		</div>
	);
}




export default App;
