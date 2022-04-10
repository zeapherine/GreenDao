import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProject from './pages/CreateProject';
import Signup from './pages/Signup';
import Bounties from './pages/Bounties';
import Project from './pages/Project';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreateProject />} />
				<Route path='signup' element={<Signup />} />
				<Route path=':projectName' element={<Project />} />
				<Route path='/bounties' element={<Bounties />} />
			</Routes>
		</div>
	);
}

export default App;
