import './App.css';
import Home from './components/home';
import Header from './components/commun/header/header';
import { Route, Routes } from 'react-router-dom';
import Destination from './components/destination/destination';
import Crew from './components/crew/crew';
import Tecnology from './components/tecnology/tecnology';

function App() {
	return (
		<div className="">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destinations" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/tecnology" element={<Tecnology />} />
			</Routes>
		</div>
	);
}

export default App;
