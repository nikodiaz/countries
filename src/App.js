import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.scss';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';
import Home from './routes/Home';
import CountryDetail from './routes/CountryDetail';
import Error404 from './components/Error404';

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<BrowserRouter>
			<div className={theme}>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='country/:name'
							element={<CountryDetail />}
						/>
						<Route path='*' element={<Error404 />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
