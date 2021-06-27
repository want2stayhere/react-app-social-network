import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



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
