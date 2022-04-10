import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProject from './pages/CreateProject';
import Signup from './pages/Signup';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreateProject />} />
				<Route path='signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
