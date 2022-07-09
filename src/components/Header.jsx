import React from 'react';
import '../styles/Header.scss';

export default function Header({ darkMode }) {
	let mode;

	if (darkMode) {
		mode = <i className='bi bi-sun-fill'></i>;
	} else {
		mode = <i className='bi bi-moon-fill'></i>;
	}

	return (
		<div className='header'>
			<a href='/'>
				<h2>Where in the world?</h2>
			</a>
			<p>
				<span>{mode}</span>Dark Mode
			</p>
		</div>
	);
}
