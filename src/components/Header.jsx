import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.scss';

export default function Header({ reloadCountries }) {
	const { theme, handleTheme } = useContext(ThemeContext);
	return (
		<div className='header'>
			<Link to='/'>
				<h2 onClick={reloadCountries}>Where in the world?</h2>
			</Link>
			<button onClick={handleTheme} value={theme}>
				<span>
					{theme === 'dark' ? (
						<i className='bi bi-sun-fill'></i>
					) : (
						<i className='bi bi-moon-fill'></i>
					)}
				</span>
				{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
			</button>
		</div>
	);
}
