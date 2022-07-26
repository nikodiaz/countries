import React from 'react';
import '../styles/CountryItem.scss';

export default function CountryItem({ country }) {
	return (
		<div className='card countryItem-container'>
			<img
				src={country.flags.svg}
				alt={`Flag of ${country.name.common}`}
			/>
			<div className='countryItem-desc'>
				<h3>{country.name.common}</h3>
				<p>
					<span>Population: </span>
					{country.population.toLocaleString()}
				</p>
				<p>
					<span>Region: </span>
					{country.region}
				</p>
				<p>
					<span>Capital: </span>
					{country.capital}
				</p>
			</div>
		</div>
	);
}
