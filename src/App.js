import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './views/Home';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/:name' element={<CountryDetail />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
