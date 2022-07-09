import React, { useEffect, useState } from 'react';
import CountryItem from '../components/CountryItem';
import Form from '../components/Form';
import Header from '../components/Header';
import {
	getAllCountries,
	getCountriesByName,
	getCountriesByRegion,
} from '../services/Requests';
import '../styles/Home.scss';

const Home = () => {
	const [countries, setCountries] = useState(null);
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState('');

	useEffect(() => {
		if (search !== '' || undefined || null) {
			getCountriesByName(setCountries, search);
		} else if (region !== '' || undefined || null) {
			getCountriesByRegion(setCountries, region);
		} else {
			getAllCountries(setCountries);
		}
	}, [search, region]);

	// Filtrar por busqueda
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	//Filtrar por region
	const handleChangeRegion = (e) => {
		setRegion(e.target.value);
	};

	return (
		<>
			<Header />
			<Form
				search={search}
				change={handleChange}
				changeRegion={handleChangeRegion}
			/>
			<div className='countries-container'>
				{countries !== null ? (
					countries.map((country) => (
						<a
							href={`/${String(
								country.name.common,
							).toLowerCase()}`}
							key={country.name.common}
						>
							<CountryItem country={country} />
						</a>
					))
				) : (
					<h1>Loading countries...</h1>
				)}
			</div>
		</>
	);
};

export default Home;
